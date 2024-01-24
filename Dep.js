
// 依赖类   每个响应式数据都会有一个依赖数组
export class Dep{
    constructor(){
        // 当前响应式数据 的依赖项数组;
        // 也就是订阅这个响应式数据的订阅者集合
        this.subscribers = new Set()
    }
    // 将活跃 副作用 全部添加进这个 订阅者集合
    depend(activeEffect){
        if(activeEffect){
            this.subscribers.add(activeEffect)
        }
    }
    // 通知 每个订阅者 进行更新
    notify() {
        for (const effect of this.subscribers){
            effect();
        }
    }
}
