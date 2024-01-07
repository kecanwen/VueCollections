/* 
*依赖收集 派发更新 源码实现
*/
// 依赖类   每个响应式数据都会有一个依赖数组   
class Dep{
    constructor(){
        this.subscribers = [] // 当前响应式数据 的依赖项数组
    }
    // 收集依赖
    depend(dep){
        if(Dep.target){
            Dep.target.add()
        }
    }
}



