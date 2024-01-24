export  const KeepAlive = {
    name:'keep-alive',
    /*abstract:true表示keep-alive是一个抽象组件，抽象组件是一种特殊的组件，
    不会渲染成真实的DOM,而是被用做其他组件的基础或者占位符，
    用于提供共享的逻辑和功能，不关心自身的呈现*/
    abstract:true,
    props:{
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    created(){
        this.cache = Object.create(null);
        this.keys = [];
    },

    destroyed() {
        for (let key in this.cache) {
            //遍历缓存对象this.cache,销毁其中所有的组件实例
            pruneCacheEntry(
                this.cache, key, this.keys
            );
        }
    },

    mounted(){
        // 实时监听黑白名单的变动
        this.$watch('include', val => {
            pruneCache(this, name => matches(val, name))
        })
        this.$watch('exclude', val => {
            pruneCache(this, name => !matches(val, name))
        })
    },

    render(){
        const slot = this.$slots.default
        const vnode = getFirstComponentChild(slot) // 获取keep-alive包裹着的第一个子组件对象及其组件名
        const componentOptions = vnode && vnode.componentOptions
        if (componentOptions) { // 存在组件参数
            const name = getComponentName(componentOptions) // 组件名
            const { include, exclude } = this
            // 根据设定的黑白名单（如果有）进行条件匹配，决定是否缓存。不匹配，直接返回组件实例（VNode）
            if (
                // 设置了include && (无组件名 || 没有命中include)
                (include && (!name || !matches(include, name))) ||
                // 设置了exclude && 有名字 && 命中了exclude
                (exclude && name && matches(exclude, name))
            ) {
                return vnode // 因为keep-alive 是在patch阶段,在vdom阶段之后 ,所以将vdom直接返回
            }

            /*******************核心逻辑 start ***************************/
            const { cache, keys } = this
            const key= vnode.key == null // 定义组件的缓存key
                ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')// 第一次进入缓存的根据规则生成缓存key
                : vnode.key // 存在key的直接返回
            if (cache[key]) { // 已经缓存过该组件
                vnode.componentInstance = cache[key].componentInstance
                // 下面两行调整了key的位置
                // 是为了实现缓存组件的LCU (最近最少使用)策略
                // 将最近使用的组件放在列表的末尾  而较久未被使用的组件移动到最前面
                remove(keys, key)
                keys.push(key)
            } else {// 没有缓存过该组件
                cache[key] = vnode // 缓存组件对象
                keys.push(key)
                if (this.max && keys.length > parseInt(this.max)) { // 超过缓存数限制，将第一个删除
                    pruneCacheEntry(cache, keys[0], keys, this._vnode)
                }
            }
            /*******************核心逻辑 end ***************************/

            vnode.data.keepAlive = true // 渲染和执行被包裹组件的钩子函数需要用到
        }
        return vnode || (slot && slot[0])
    }
}