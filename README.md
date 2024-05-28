<h1 align="center">KK_Vue_Code_Learn</h1>

## 开发计划

<h3 align="center">vue源码</h3>

- [x] vue.js vue2 完整源码注释
- [x] watcher.js  实现一个观察者对象watcher
- [x] nextTick.js 实现一个nextTick函数
- [x] keepalive.js 实现一个keepalive组件
- [x] vueReArray.js Vue2 重写数组方法
- [ ] Reactive 设计一个响应式系统
- [ ] diff算法实现
- [ ] patch的过程
- [ ] template生成ast过程
- [ ] computed计算属性的实现
- [ ] watch侦听器的实现
- [ ] provide inject实现
- [ ] slot插槽的实现
- [ ] deretive指令的实现
- [ ] v-model的实现  
- [ ] Teleport的实现
- [ ] Transition组件的实现
- [ ] Vuex的实现
- [ ] Vue-router的实现


<h3 align="center">手写原生Js [KK_Vue_Code_Learn/handwriteJs]</h3>

- [x] 实现lodash的set和get方法  lodashGetSet.js
- [x] 手写 Object.create
- [x] 手写 instanceof 方法
- [x] 手写 new 操作符
- [x] 手写 Event Bus  发布订阅模式  eventBus.js
- [x] 手写forEach myForEach.js
- [x] 浅拷贝  shalowCopy.js   
- [x] 深拷贝  deepCopy.js    
- [x] 创建自定义事件 customEvent.js  
- [x] 手写async await函数 myAsyncFunction.js  
- [x] 手写 Promise Promise.js
- [x] 手写防抖函数
- [x] 手写节流函数
- [ ] 手写类型判断函数  
- [ ] 手写 call 函数
- [ ] 手写 apply 函数
- [ ] 手写 bind 函数
- [ ] 函数柯里化的实现 curry
- [ ] 实现AJAX 请求
- [ ] 使用Promise封装AJAX请求


<h3 align="center">算法相关</h3>

- [x] 排序算法 sort 冒泡 
- [x] 实现版本号对比方法  compareVersion.js
- [x] 轮转数组 rotateArray
- [x] 多数元素  majorityElement
- [x] 买卖股票的最佳时机 maxProfit
- [x] 合并两个有序数组 merge2orderArray
- [x] 删除有序数组中的重复项 removeDuplicates
- [x] 移除元素 removeElement
- [x] 斐波那契数 fib
- [x] 生成1000个 不重复的四位数验证码 create10000Code
- [x] 将一串英文字符串中的大写字母改为小写字母，小写字母改为大写字母 hyphenate.js
- [x] 编写一个函数，检查给定的值是否是给定类或超类的实例 
- [x] 字符串驼峰化  toCamelCase
- [x] 字符[a-zA-Z]重复  checkDuplicateLetters
- [x] 回文串 isPalindrome
- [x] 输入一个字符串，找到第一个不重复字符的下标 findOneStr
- [x] 输入：s = "3[a2[c]]" 输出：accaccacc  formatStr
- [x] 实现日期格式化函数 dateFormat 
- [x] 加一  plusOne.js
- [x] 求给定数组的最大子数组和（动态规划）getMaxArrSum.js


<h3 align="center">场景类 [sence]</h3>

- [x] heartbeat 实现一个心跳的按钮,要求缩小的时间比放大的时间长
- [x] IntersectionObserver 判断当前元素 进入视口
- [x] getMostFrequentElement 获取页面上 哪个元素最多
- [x] checkWhiteScreen 前端白屏检测方法


<h3 align="center">canvas绘制大量数据表格  canvasTable</h3>

- [ ] 分批绘制
- [ ] 使用缓存
- [ ] 离屏渲染
- [ ] 利用web worker
- [ ] requestAnimationFrame时间分片
- [ ] 对Canvas API优化
- [ ] 设置合理数据结构


1. 实现防抖函数
2. 实现节流函数
3. 实现instanceOf
4. 实现new
5. 实现call
6. 实现apply
7. 实现bind
8. 实现浅拷贝
9. 实现深拷贝
10. 实现Promise
11. 实现类的继承
12. 实现发布订阅模式
13. 实现观察者模式
14. 实现LRU算法
15. 实现模版字符串解析
16. 实现函数柯里化
17. 实现redux中间件
18. 实现数组扁平化
19. 实现数组去重
20. 实现对象去重
21. 实现千位分隔符
22. 实现是否是电话号码
23. 实现是否是邮箱
24. 实现是否是手机号
25. 实现add函数
add(1); 			// 1
add(1)(2);  	// 3
add(1)(2)(3)；// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6
26. 实现 (5).add(3).minus(2) 功能
27. 查找字符串中出现最多的字符和个数
28. 实现字符串查找
29. 字符串最长的不重复子串
30. 实现对象扁平化
31. 实现JSON.stringify
32. 实现JSON.parse
33. 实现解析 URL Params 为对象
34. 实现数组转树
35. 实现树转数组
36. 实现下划线转驼峰命名
37. 实现一个 sleep 函数，比如 sleep(1000) 意味着等待1000毫秒
38. 实现两个数组的交集
39. 实现异步并发数限制
40. 实现有并行限制的 Promise 调度器
41. 实现图片懒加载
42. 实现版本号排序
43. 实现大数相加
44. 实现大数相乘
45. 实现怎么在制定数据源里面生成一个长度为 n 的不重复随机数组 能有几种方法 时间复杂度多少
46. 实现查找数组公共前缀
47. 实现判断括号字符串是否有效
48. 实现一个padStart()或padEnd()的polyfil
49. 实现一个拖拽功能
50. 实现基于Promise.all实现Ajax的串行和并行
51. 实现数组去重
52. 实现对象去重
53. 实现数组的乱序
54. 实现数组元素求和
55. 实现数组的扁平化
56. 实现字符串翻转
57. 实现红黄绿灯循环输出
58. 实现每隔一秒打印 1,2,3,4
59. 小孩报数问题
60. 用Promise实现图片的异步加载
61. 查找文章中出现频率最高的单词
62. 实现双向数据绑定
63. 实现简单路由
64. 实现斐波那契数列
65. 字符串出现的不重复最长长度
66. 使用 setTimeout 实现 setInterval
67. 实现 jsonp
68. 判断对象是否存在循环引用
69. 实现Object.create
70. 实现类型判断函数
71. 实现Object.assign
72. 实现深度优先
73. 实现广度优先
74. 实现eventbus
75. 实现vdom
76. 实现如何生成一个随机字符串
77. 实现CSS水平垂直居中
78. CSS画三角形
79. CSS实现两栏和三栏布局
80. 手写Object.is()
