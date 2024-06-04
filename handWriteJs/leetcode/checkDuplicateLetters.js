/* 
一串字符串，当字符[a-zA-Z]重复，输出true，否则输出false。
例1：dssfsfsf–>true
例2：21333ghksd–>false
*/
function checkDuplicateLetters(str){
    if(!/[a-zA-Z]/.test(str)){
        return false
    }
    const newArr = str.split('').filter(item=>{
        if(/[a-zA-Z]/.test(item)){
            return item
        }
    })
    let cache = [];
    for (let index = 0; index < newArr.length; index++) {
        if(cache.includes(newArr[index])){
            return true
        }else{
            cache.push(newArr[index])
        }
    }
    return false
}
console.log(checkDuplicateLetters('dssfsfsf'))
console.log(checkDuplicateLetters('21333ghksd'))
console.log(checkDuplicateLetters('123445'))