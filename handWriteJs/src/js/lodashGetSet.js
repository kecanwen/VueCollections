export const lodashGet = function (object, path = '', defaultValue) {
    const keys = path.split('.');

    let value = object;
    for (const key of keys) {
        if (value && typeof value == 'object' && key in value) {
            value = value[key]
        } else {
            return defaultValue
        }
    }
    return value
}

export const lodashSet = function (object, path = '', value) {
    //根据.分割字符串
    const parts = path.split('.')
    //深层次访问属性
    parts.reduce((acc, cur, idx) => {
        //如果属性不存在，则创建一个空对象
        if (!acc[cur]) {
            acc[cur] = {}
        }
        //当遍历到最后一项，则将值赋给当前属性
        if (idx === parts.length - 1) {
            acc[cur] = value
        }
        return acc[cur]
    }, object)

}

