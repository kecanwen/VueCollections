import {Dep} from "./Dep";
import {track} from "./track";
import {trigger} from "./trigger";
/**
 * 实现响应式数据的函数
 * */
function reactive(obj){
    return new Proxy(obj,{
        // receiver 代表原始操作接收者 指向代理对象自身 或者代理对象原型链上的对象
        // 当我们通过代理对象访问属性时,如果属性存在代理对象自身,那么receiver就是代表自身
        // 如果属性不存在于代理对象自身,而是存在于原型链上的某个对象,那么receiver就是那个原型链上的对象
        // ** 作用 **
        // 保持Proxy对象的行为与被代理对象尽可能保持一致
        get(target,key,receiver){
            const value = Reflect.get(target,key,receiver)
            track(target,key)// 依赖收集
            return value
        },
        set(target,key,value,receiver){
            const oldValue = Reflect.get(target, key, receiver);
            const result = Reflect.set(target, key, value, receiver);
            if (value !== oldValue) {
                trigger(target, key); // 派发更新
            }
            return result;
        }
    })
}

/**
 * 写一个小demo
 * */
const data = reactive({name:'kecanwen'});
let activeEffect = null;
function effect(fn){
    activeEffect = fn;//收集一个依赖
    fn();//执行这个依赖函数
    activeEffect = null;// 清空
}
function example(){
    effect(()=>{
        console.log('当前响应式名字变量被更改,以下是新的名字===>',data.name)
    })
    data.name = 'kangxintian';
}
example();



