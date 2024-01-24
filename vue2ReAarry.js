/***
 * Vue重写数组方法的源码实现
 * */
//判断是不是数组  是数组则单独一套处理逻辑
if (Array.isArray(value)) { 
    var augment = hasProto  //__proto__ 存在么 高级浏览器都会有这个
        ? protoAugment
        : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
}

export function arrayObserver(arr){
    // 获取数组的原型
    const arrayProto = Array.prototype;
    // 创建一个继承自数组原型的对象
    const arrayObj = Object.create(arrayProto);
    // 需要拦截的数组变异方法
    const methodToPatch = ['push','pop','sort','splice','shift','unshift','reserve'];
    //对每个变异方法进行改写
    methodToPatch.forEach(method=>{
        //缓存 原来的数据方法
        const original = arrayProto[method];
        // 使用defineProperty对数组进行重写
        Object.defineProperty(arrayObj,method,{
             // 调用原始的数组方法
            const results = original.apply(this, args);
             // 触发依赖更新，进行响应式处理
            // ...
            
            // 对数组以上的方法进行变异操作之后  触发依赖更新
            return results;
        })
    })
}