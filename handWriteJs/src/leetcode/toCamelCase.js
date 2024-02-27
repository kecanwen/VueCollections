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
