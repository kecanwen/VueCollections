/* 
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。
*/
var plusOne = function(digits) {
    let isForward = true;
    let len = digits.length;
    for (let i = len - 1; i > 0; index--) {
        const result = digits[i] + 1;
        if(result < 10){
            isForward = false;
            break;
        }else{
            digits[len] = 0 
        }
    }
    isForward ? digits.unshift(1) : null;
    return digits
};