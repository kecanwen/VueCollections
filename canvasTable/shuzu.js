/* 
将一串字符串驼峰化,第一个‘-’后的字母无需转小写为大写，其他‘-’后的字母需转小写为大写
例1：font-size转化为fontSize
例2：-weront-size转化为werontSize
*/
function toCamelCase(str){
    let newArr = str.split('-');
    newArr = newArr.filter(item=>{
        return !!item
    })
    return newArr.map((word,index)=>{
        if(index == 0){
            return word
        }else{
            return word.charAt(0).toUpperCase() + word.slice(1)
        } 
    }).join('')
}
console.log(toCamelCase('font-size'));
console.log(toCamelCase('-weront-size'));


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

/* 
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写
*/
function isPalindrome(str){
    str = str.replace(/[^a-zA-Z0-9]/g, '')
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('123321'))
console.log(isPalindrome('abcba'))
console.log(isPalindrome('12323132dfsffdf321'))

/* 
斐波那契数列
*/
function fb(n){
    if(n=== 0 || n===1){
        return n
    }
    return fb(n-2) + fb(n-1) 
}
console.log(fb(2))
console.log(fb(3))
console.log(fb(4))
console.log(fb(5))
