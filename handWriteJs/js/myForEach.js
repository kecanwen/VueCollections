// ! 实现一个forEach 函数
// * 一些奇怪的现象
let arr1 = [1,2,3,4,5,6,7,8,9,10];
arr1.forEach(item => {
    console.log(item);
    arr1.push('new')
});
console.log(arr1);//) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new']

// * 第一次迭代：item = 1, index = 0。你删除了索引为 0 的元素，数组变为 [2, 3, 4, 5, 6, 7, 8, 9, 10]。
// * 第二次迭代：item = 3, index = 1。由于前面删除了一个元素，原来的索引为 1 的元素现在变成了索引为 0 的元素，所以你删除了索引为 1 的元素，数组变为 [2, 4, 5, 6, 7, 8, 9, 10]。
// * 第三次迭代：item = 5, index = 2。同样的道理，你删除了索引为 2 的元素，数组变为 [2, 4, 6, 7, 8, 9, 10]。
// * 以此类推，直到迭代完整个数组。
let arr2 = [1,2,3,4,5,6,7,8,9,10];
arr2.forEach((item,index) => {
    console.log(item);
    arr2.splice(index,1)
});
console.log(arr2);//) [2, 4, 6, 8, 10]

// * 为了还原真相  手写forEach
Array.prototype.myForEach = (callback)=>{
    const len = this.length;
    for (let i = 0; i < len; i++) {
        callback(this[i], i, this);
    }
    return this;
}