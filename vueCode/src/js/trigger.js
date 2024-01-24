import {targetMap} from "./globalVar";

/**
 * 派发更新函数
 * */
export const trigger = function (target, key){
    const depsMap = targetMap.get(target);
    if(!depsMap){
        return;
    }
    const dep = depsMap.get('key');
    if(dep){
        dep.notify()
    }
}