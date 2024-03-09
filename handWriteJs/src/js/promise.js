const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(executor) {//new Promise时，需要传递一个 executor 执行器，执行器立刻执行
    let self = this;
    self.status = PENDING;//当前的状态
    self.onFulfilled = [];//成功的回调
    self.onRejected = []; //失败的回调
    //PromiseA+ 2.1
    function resolve(value) {
        if (self.status === PENDING) {//promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled    
            self.status = FULFILLED;//promise 的状态一旦确认，就不会再改变
            self.value = value;
            self.onFulfilled.forEach(fn => fn());
        }
    }

    function reject(reason) {
        if (self.status === PENDING) {//promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled
            self.status = REJECTED;//promise 的状态一旦确认，就不会再改变
            self.reason = reason;
            self.onRejected.forEach(fn => fn());
        }
    }

    try {
        executor(resolve, reject);//executor 接受两个参数，分别是 resolve 和 reject
    } catch (e) {
        reject(e);
    }
}

//then 的参数 onFulfilled 和 onRejected 可以缺省
Promise.prototype.then = function (onFulfilled, onRejected) {//promise 都有 then 方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled,和 promise 失败的回调 onRejected
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    let self = this;
    let promise2 = new Promise((resolve, reject) => {
        //如果调用 then 时，promise已经成功，则执行 onFulfilled，并将promise的值作为参数传递进去。
        if (self.status === FULFILLED) {
            setTimeout(() => {
                try {
                    let x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        } else if (self.status === REJECTED) {
            //如果promise已经失败，那么执行 onRejected, 并将 promise 失败的原因作为参数传递进去。
            setTimeout(() => {
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        } else if (self.status === PENDING) {
            //如果promise的状态是pending，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次将对应的函数执行(发布订阅)
            self.onFulfilled.push(() => {
                setTimeout(() => {//使用setTimeout只是模拟异步，原生Promise并非是这样实现的
                    try {
                        let x = onFulfilled(self.value);
                        // promise 可以then多次，promise 的then 方法返回一个 promise
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            self.onRejected.push(() => {
                setTimeout(() => {//使用setTimeout只是模拟异步，原生Promise并非是这样实现的
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }
    });
    return promise2;
}

function resolvePromise(promise2, x, resolve, reject) {
    //如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败的回调(onRejected)
    //如果 then 返回的是一个promise,那么需要等这个promise，那么会等这个promise执行完，promise如果成功，
    // 就走下一个then的成功，如果失败，就走下一个then的失败
    let self = this;
    if (promise2 === x) {
        reject(new TypeError('Chaining cycle'));
    }
    if (x && typeof x === 'object' || typeof x === 'function') {
        //为何需要used这个flag，
        //如果同时调用 resolvePromise 和 rejectPromise，
        //或者对同一参数进行多次调用，则第一个调用优先，任何进一步的调用都将被忽略。
        //因此，我们需要这样的标志来确保只会执行一次。
        let used; 
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, (y) => {
                    if (used) return;
                    used = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, (r) => {
                    if (used) return;
                    used = true;
                    reject(r);
                });

            }else{
                if (used) return;
                used = true;
                resolve(x);
            }
        } catch (e) {
            if (used) return;
            used = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}

module.exports = Promise;
