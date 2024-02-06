// !生成1000个 不重复的四位数验证码
const create10000Code = function(){
    const set = new Set();
    const get4Code = function(){
        let code = '';
        for(let i=0;i < 4;i++){
            code += Math.floor(Math.random() * 10);
        }
        if(set.has(code)){
            return get4Code()
        }
        return code
    };

    for(let i = 0; i < 1000; i++){
        let checkCode = get4Code();
        set.add(checkCode)
    }
    return [...set]
}