import { lodashGet, lodashSet} from './lodashGetSet.js'

lodashGet()

export {
    lodashGet,
    lodashSet
}


const obj = {
    a: {
        b: {
            c: 'Hello, World!'
        }
    }
};

const value = lodashGet(obj, 'a.b.c');
console.log(value); // 输出：Hello, World!

const defaultValue = lodashGet(obj, 'x.y.z', '默认值');
console.log(defaultValue); // 输出：默认值

lodashSet(obj, 'a.b.c', '新的abc1111');
console.log(obj); 