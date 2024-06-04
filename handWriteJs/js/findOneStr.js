/* 
题目： 输入一个字符串，找到第一个不重复字符的下标
输入： 'abcabcde'
输出： 6
*/
function findOneStr(str){
    if(str.length === 0){
        return -1
    }
    const array = str.split('');
    const map = {}
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element in map){
            map[element] ++ 
        }else{
            map[element] = 1
        }
    }
    for (const key in map) {
        if (map[key] === 1) {
           return array.indexOf(key)
        }
    }
}
findOneStr('abcabcde')