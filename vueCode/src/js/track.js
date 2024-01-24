import {Dep} from "./Dep";
import {targetMap} from "./globalVar";
/**
 * 依赖收集函数
 * target(当前响应式数据)===> 依赖收集的集合
 * */
// 这里选择WeakMap的原因是为了 避免造成内存泄露
// 我们使用 targetMap 来建立目标对象和依赖的映射关系。
// 这个映射关系是临时的，只在数据响应式过程中使用，并不需要长久地持有对象的引用。
// 因此，选择使用 WeakMap 能够更好地管理内存，避免潜在的内存泄漏问题

export const track = function (target, key){
    let depsMap = targetMap.get(target);
    //判断当前响应式数据 是否存在依赖项
    //不存在依赖项情况下
    if(!depsMap){
        // 没有依赖项 创建一个依赖项目 后续为其添加一些依赖项
        depsMap = new Map();
        targetMap.set(target,depsMap);
    }
    // 存在依赖项的情况下
    let dep = depsMap.get(key);// 获取属性key的当前依赖集合
    // 确保每个属性都有一个独立的依赖集合
    if (!dep) {
        dep = new Dep();// 引入Dep类
        depsMap.set(key, dep);
    }
    dep.depend();
}