// ! 手写 Object.create
// * 创建一个对象 这个对象原型指向传进来的原型对象
export const handObject = function(protoObj){
    const obj = {};
    Object.setPrototypeOf(obj,protoObj);
    return obj
}

// ! 手写 instanceof 方法
// * instanceof 用于判断构造函数的 prototype 是否出现在对象原型链的任何位置
export const handInstanceOf = function(target, targetConstructor){
    const targetProto = Object.getPrototypeOf(target);// 获取对象原型
    targetConstructorProto = targetConstructor.prototype;// 获取构造函数原型
    while(true){
        if(!targetProto) return false;
        if(targetProto === targetConstructorProto) return true
        targetProto = Object.getPrototypeOf(targetProto)//一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
    }
}

// ! 手写 new 操作符
// * 1、创建一个 新对象
// * 2、将 新对象 原型设置为 函数的prototype
// * 3、让函数的 this 指向这个对象 执行构造函数里面代码（为这个对象设置属性）
export const myNew = function(constructor, argument) {
    const obj = Object.create(constructor.prototype);
    const result = constructor.apply(obj, ...argument)
    // 如果构造函数返回的是对象，则返回该对象；否则返回新创建的对象
    return (typeof result === 'object' && result !== null) ? result : obj;
}