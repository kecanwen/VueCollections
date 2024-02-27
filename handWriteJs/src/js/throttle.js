/* 
手写一个节流函数
*/
const throttle = (fn,delay)=>{
    let canRun = true;
    return function(){
        if(!canRun){
            return;
        }
        let that = this;
        let args = arguments;
        fn.apply(that,args);
        setTimeout(()=>{
            canRun = false;
        },delay)
    }
}