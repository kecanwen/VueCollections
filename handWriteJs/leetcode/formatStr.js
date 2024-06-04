/* 
样例输入：s = "3[a2[c]]"
样例输出：accaccacc
*/
const formatStr = (str) =>{
    let stack = [];
    let i = 0;
    while(i < str.length){
        if(/[a-zA-Z0-9]/.test(str[i])){
            stack.push(str[i])
        }else{
            formatStr(str.slice(i + 1))
        }
        i++;
    }
    const strCon = (str, num)=>{
        let newStr = ''
        for (let index = 0; index < num; index++) {
            newStr += str
        }
        return newStr
    }
    let returnStr = '';
    for (let i = stack.length - 1; i >= 0; i--) {
        if(/[a-zA-Z]/.test(stack[i])){
            returnStr = stack[i] + returnStr
        }
        if(/[0-9]/.test(stack[i])){
            returnStr = strCon(returnStr,stack[i])
        }
    }
    return returnStr
}
console.log(formatStr('3[a2[c]]'))