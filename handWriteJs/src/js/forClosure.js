for (var index = 0; index < 10; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1000);
} // 10 10 10 10 10 10 10 10 10

/* 解决上诉闭包陷阱的方案 */
// 方案一 使用let关键字
// 将var改为let，这样在每次循环迭代时，会创建一个新的index变量的副本，从而避免闭包陷阱
for (let index = 0; index < 10; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1000);
}

// 方案二 使用闭包
for (var index = 0; index < 10; index++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(index);
}

//  方案三 使用setTimeout的第三个参数
for (var index = 0; index < 10; index++) {
  setTimeout(
    (i) => {
      console.log(i);
    },
    1000,
    index
  );
}
