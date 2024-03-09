/**
 * 手写实现一个防抖函数
 */
const debounce = (fn, delay)=>{
    let timer = null;
    return function(){
        const that = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(that,arguments)
        },delay)
    }
}
