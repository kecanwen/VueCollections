// ! 手写 Promise
const PENDING = 'pending';
const RESOLVE = 'resolved';
const REJECTED = 'rejected';

const myPromise = function(fn){
    let self = this;
    this.state = PENDING; // 初始化状态
    this.value = null;// value用于保存 resolved 或者 rejected 传入的值
}