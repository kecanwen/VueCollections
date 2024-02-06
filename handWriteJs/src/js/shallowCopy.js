// !浅拷贝
function shallowCopy(obj) {
    // 检查传入的参数是否为对象或数组
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    // 创建一个新的对象或数组
    const copy = Array.isArray(obj) ? [] : {};
  
    // 遍历原始对象的属性或数组的元素
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 将属性或元素复制到新对象或数组中
        copy[key] = obj[key];
      }
    }
  
    return copy;
  }
  