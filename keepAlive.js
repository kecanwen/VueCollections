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
        const vnode = getFirstComponentChild(slot) // 找到第一个子组件对象
        const componentOptions = vnode && vnode.componentOptions
        if (componentOptions) { // 存在组件参数
            // check pattern
            const name = getComponentName(componentOptions) // 组件名
            const { include, exclude } = this
            if (
                // not included
                (include && (!name || !matches(include, name))) ||
                // excluded
                (exclude && name && matches(exclude, name))
            ) {
                return vnode
            }
            const { cache, keys } = this
            const key= vnode.key == null // 定义组件的缓存key
                ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
                : vnode.key
            if (cache[key]) { // 已经缓存过该组件
                vnode.componentInstance = cache[key].componentInstance
                remove(keys, key)
                keys.push(key) // 调整key排序
            } else {
                cache[key] = vnode // 缓存组件对象
                keys.push(key)
                // prune oldest entry
                if (this.max && keys.length > parseInt(this.max)) { // 超过缓存数限制，将第一个删除
                    pruneCacheEntry(cache, keys[0], keys, this._vnode)
                }
            }

            vnode.data.keepAlive = true // 渲染和执行被包裹组件的钩子函数需要用到
        }
        return vnode || (slot && slot[0])
    }
}