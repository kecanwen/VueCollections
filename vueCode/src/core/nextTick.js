/* 
nextTick实现原理
    概念
        nextTick是一个异步方法，用于在下次DOM更新循环结束之前执行回调函数
    具体实现原理
        当调用nextTick（callback）方法时，Vue会将回调函数存储起来
        Vue会先检测当前环境是否支持原生的Promise,支持的话，则使用Promise.then方法将回调函数延迟到  微任务 队列中去执行
        如果当前环境不支持Promise，Vue会检测是否支持原生的MutationObserver对象，如果支持，则创建一个MutationObserver实例，监控Dom变化，在Dom更新循环结束之前执行回调函数
        如果当前环境既不支持Promise 也不支持MutationObserver ,那么就降级使用SetTimeout将回调函数延迟到宏任务队列去执行
*/
const callbacks = [];// 定义一个异步任务的队列
let pending = false;

// 执行所有的回调函数
function flushCallbacks(){
    pending = false;
    const copies = callbacks.slice(0);// 浅拷贝 callbacks
    callbacks.length = 0;//将原数组 重置为空数组
    for(let i = 0;i<copies.length;i++){
        copies[i]()
    }
}


let timerFunc;
if(typeof Promise !== undefined){
    // 使用Promise微任务去实现
    const p = Promise.resolve();//创建一个已经解决的Promise对象  但是还没有调用then
    timerFunc = ()=>{
        p.then(flushCallbacks)
    }
}else{
    // 使用MutationObserber 微任务去实现
    const observer = new MutationObserver(flushCallbacks);//实例化一个MutationObserver对象
    const textNode = document.createTextNode('1')//创建一个普通的text文本节点
    observer.observe(textNode,{
        characterData:true // characterData是一个布尔值，用于指定是否观察目标节点的文本变化
    })
    timerFunc = () =>{
        textNode.textContent = '2'//文本节点变化时触发 flushCallbacks 函数。
    }
}

export function myNextTick(cb) {
    callbacks.push(cb);
    if(!pending){
        pending = true;
        timerFunc();
    }
}