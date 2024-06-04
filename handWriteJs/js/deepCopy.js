// !深拷贝
function deepCopy(obj, visibledObj = new WeakMap())  {
     // 检查是否已经拷贝过该对象，避免循环引用
    if(visibledObj.has(obj)) {
        return visibledObj.get(obj);
    }
    // 检查传入的参数是否为对象或数组
    if (typeof obj!== 'object' || obj === null) {
      return obj;
    }
    // 创建一个新的对象或数组
    const copy = Array.isArray(obj)? [] : {};

    // 将当前对象添加到已拷贝对象的 Map 中
    visibledObj.set(obj, copy);

    // 遍历原始对象的属性或数组的元素
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 将属性或元素复制到新对象或数组中
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
}
