// !编写一个函数，检查给定的值是否是给定类或超类的实例 
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || !(classFunction instanceof Function))
      return false;
    return Object(obj) instanceof classFunction;
};

