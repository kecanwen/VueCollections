/*
* 观察者对象通过解析表达式，来收集【响应式数据】依赖项
* 并在【响应式数据】发生 变化时，触发回调
* 观察者对象可以用于实现计算属性（Computed Property）、侦听器（Watcher）和渲染函数（Render Function）等功能
*/

var watcher = function Watcher(
  vm, //vm dom
  expOrFn, //获取值的函数，或者是更新viwe试图函数
  cb, //回调函数,回调值给回调函数
  options, //参数
  isRenderWatcher //是否渲染过得观察者
) {
  // console.log('====Watcher====')
  this.vm = vm;
  //是否是已经渲染过得观察者
  if (isRenderWatcher) {
    //把当前 Watcher 对象赋值给 vm._watcher上
    vm._watcher = this;
  }
  //把观察者添加到队列里面 当前Watcher添加到vue实例上
  vm._watchers.push(this);
  // options
  if (options) {
    //如果有参数
    this.deep = !!options.deep; //实际
    this.user = !!options.user; //用户
    this.lazy = !!options.lazy; //懒惰 ssr 渲染
    this.sync = !!options.sync; //如果是同步
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb; //回调函数
  this.id = ++uid$1; // uid for batching uid为批处理  监听者id
  this.active = true; //激活
  this.dirty = this.lazy; // for lazy watchers 对于懒惰的观察者
  this.deps = []; // 观察者队列
  this.newDeps = []; // 新的观察者队列
  // 内容不可重复的数组对象
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  // 把函数变成字符串形式
  this.expression = expOrFn.toString();
  // parse expression for getter
  //getter的解析表达式
  if (typeof expOrFn === "function") {
    //获取值的函数
    this.getter = expOrFn;
  } else {
    //如果是keepAlive 组件则会走这里
    //path 因该是路由地址
    if (bailRE.test(path)) {
      //  匹配上 返回 true     var bailRE = /[^\w.$]/;  //匹配不是 数字字母下划线 $符号   开头的为true
      return;
    }

    // //匹配不上  path在已点分割
    // var segments = path.split('.');
    // return function (obj) {
    //
    //     for (var i = 0; i < segments.length; i++) {
    //         //如果有参数则返回真
    //         if (!obj) {
    //             return
    //         }
    //         //将对象中的一个key值 赋值给该对象 相当于 segments 以点拆分的数组做obj 的key
    //         obj = obj[segments[i]];
    //     }
    //     //否则返回一个对象
    //     return obj
    // }

    //匹配不是 数字字母下划线 $符号   开头的为true

    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      //如果不存在 则给一个空的数组
      this.getter = function () {};
      "development" !== "production" &&
        warn(
          'Failed watching path: "' +
            expOrFn +
            '" ' +
            "Watcher only accepts simple dot-delimited paths. " +
            "For full control, use a function instead.",
          vm
        );
    }
  }
  this.value = this.lazy //   lazy为真的的时候才能获取值  这个有是组件才为真
    ? undefined
    : this.get(); //计算getter，并重新收集依赖项。 获取值
};

/**
 * Evaluate the getter, and re-collect dependencies.
 * 计算getter，并重新收集依赖项。 获取value值
 */
Watcher.prototype.get = function get() {
  //添加一个dep target
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    // console.log(this.getter)
    //获取值 如果报错 则执行catch
    value = this.getter.call(vm, vm);
    // console.log(value)
  } catch (e) {
    if (this.user) {
      handleError(e, vm, 'getter for watcher "' + this.expression + '"');
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    //“触摸”每个属性，以便它们都被跟踪为
    //依赖深度观察
    if (this.deep) {
      // //如果val 有__ob__ 属性
      // if (val.__ob__) {
      //     var depId = val.__ob__.dep.id;
      //     // seen 中是否含有depId 属性或者方法
      //     if (seen.has(depId)) {
      //         return
      //     }
      //     //如果没有则添加进去
      //     seen.add(depId);
      // }
      //为 seenObjects 深度收集val 中的key
      traverse(value);
    }
    // 出盏一个pushTarget
    popTarget();
    //清理依赖项集合。
    this.cleanupDeps();
  }
  //返回值
  return value;
};

/**
 * Add a dependency to this directive. 向该指令添加依赖项。
 */
Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id; //dep.id 一个持续相加的id
  if (!this.newDepIds.has(id)) {
    //如果id存在
    this.newDepIds.add(id); //添加一个id
    this.newDeps.push(dep); //添加一个deps
    if (!this.depIds.has(id)) {
      //如果depIds 不存在id则添加一个addSub  //添加一个sub
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 * 清理观察者依赖项集合。
 */
Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var this$1 = this;
  var i = this.deps.length; //遍历
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      //清除 sub
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds; //获取depid
  this.depIds = this.newDepIds; //获取新的depids
  this.newDepIds = tmp; //旧的覆盖新的
  this.newDepIds.clear(); //清空对象

  //互换值
  tmp = this.deps; //
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.用户界面。
 * Will be called when a dependency changes.
 * 将在依赖项更改时调用。
 */
Watcher.prototype.update = function update() {
  /* istanbul ignore else  伊斯坦布尔忽略其他 */
  if (this.lazy) {
    //懒惰的 忽略
    this.dirty = true;
  } else if (this.sync) {
    //如果是同步

    //更新数据
    this.run();
  } else {
    //如果是多个观察者
    queueWatcher(this); //队列中的观察者
  }
};

/**
 * Scheduler job interface. 调度器的工作界面。
 * Will be called by the scheduler. 将被调度程序调用。
 */
Watcher.prototype.run = function run() {
  if (this.active) {
    //活跃
    var value = this.get(); //获取值 函数 expOrFn
    if (
      value !== this.value || //如果值不相等
      // Deep watchers and watchers on Object/Arrays should fire even 深度观察和对象/数组上的观察应该是均匀的
      // when the value is the same, because the value may 当值相等时，因为值可以
      // have mutated. 有突变。
      isObject(value) || //或者值的object
      this.deep //获取deep为true
    ) {
      // set new value
      var oldValue = this.value; //获取旧的值
      this.value = value; //新的值赋值
      if (this.user) {
        //如果是user 用更新值
        try {
          this.cb.call(this.vm, value, oldValue); //更新回调函数  获取到新的值 和旧的值
        } catch (e) {
          handleError(
            e,
            this.vm,
            'callback for watcher "' + this.expression + '"'
          );
        }
      } else {
        this.cb.call(this.vm, value, oldValue); //更新回调函数  获取到新的值 和旧的值
      }
    }
  }
};

/**
 * Evaluate the value of the watcher. 评估观察者的值。
 * This only gets called for lazy watchers. 这只适用于懒惰的观察者。
 */
Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get(); //获取值
  this.dirty = false; // 懒惰者标志  标志已经获取过一次值
};

/**
 * Depend on all deps collected by this watcher.
 * 依赖于此监视程序收集的所有dep。
 * 循环deps 收集 newDeps dep 当newDeps 数据被清空的时候重新收集依赖
 */
Watcher.prototype.depend = function depend() {
  // this.newDeps.push(dep); //添加一个deps
  //deps=this.newDeps
  var this$1 = this;
  var i = this.deps.length;
  // console.log('==  this.deps.length  ==')
  while (i--) {
    // 为Watcher 添加dep 对象
    // this.newDeps.push(dep); //添加一个deps
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 * 从所有依赖项的订阅方列表中删除self。
 */
Watcher.prototype.teardown = function teardown() {
  var this$1 = this;
  if (this.active) {
    // remove self from vm's watcher list 从vm的监视者列表中删除self
    // this is a somewhat expensive operation so we skip it 这是一个有点昂贵的操作，所以我们跳过它
    // if the vm is being destroyed. 如果vm被销毁。
    if (!this.vm._isBeingDestroyed) {
      //是否销毁的标志
      remove(this.vm._watchers, this); //删除观察者
    }
    var i = this.deps.length;
    while (i--) {
      //删除 removeSub
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};
