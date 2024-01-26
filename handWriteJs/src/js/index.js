import { lodashGet, lodashSet} from './lodashGetSet.js'
import { compareVersion } from './compareVersion.js'

export {
    lodashGet,
    lodashSet,
}

// * 1、 lodashGet  lodashSet

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

// * 2、 compareVersion

console.log('───────────────────────');
console.log(
    compareVersion('1.2.3','1.5.6'),// -1
    compareVersion('3.2.3','1.5.6'),// 1
    compareVersion('1.2.3','1.2.3'),// 0
    compareVersion('1.2','1.1.3'),// 1
    compareVersion('1.2.5','1.3'),// -1 
    compareVersion('1.2','1.2')// 0
)