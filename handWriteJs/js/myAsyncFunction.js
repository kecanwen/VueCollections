/* 
手写async await函数
*/
function myAsyncFunction(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('异步操作完成')
        },3000)
    })
}

function myAsync(){
    
}