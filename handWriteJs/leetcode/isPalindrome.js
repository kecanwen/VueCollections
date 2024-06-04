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