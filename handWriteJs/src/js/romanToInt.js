// !罗马数字转整数
const romaToInteger = function(roma){
    const romaMap = {
        'I': 1,
        'IV':4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    let ans = 0;
    for(let i = 0; i < roma.length;){
        if(i+1 < roma.length && romaMap[roma.substring(i, i+2)]){
            ans += romaMap[roma.substring(i, i+2)];
            i += 2;
        }else{
            ans += romaMap[roma.substring(i, i+1)];
            i += 1;
        }
    }
    return ans;
}