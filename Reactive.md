在 Vue 的响应式系统中，依赖收集和派发更新是实现数据响应式的重要机制。下面是 Vue 2.x 版本中依赖收集和派发更新的简化版源码实现。

首先，我们需要定义一个 `Dep` 类，用于表示一个依赖。每个响应式属性都会关联一个 `Dep` 实例。`Dep` 类的主要作用是管理依赖和通知更新。

```javascript
class Dep {
  constructor() {
    this.subscribers = []; // 存储依赖的数组
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this); // 将当前依赖添加到正在计算的 Watcher 中
    }
  }

  notify() {
    for (const subscriber of this.subscribers) {
      subscriber.update(); // 通知依赖进行更新
    }
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber); // 添加依赖到订阅者数组
  }
}

Dep.target = null; // 全局的 Watcher

```

接下来，我们定义一个 `Watcher` 类，用于表示一个观察者。每个观察者都会订阅一个或多个响应式属性的变化，并在变化发生时执行相应的回调函数。

```javascript
class Watcher {
  constructor(vm, key, callback) {
    this.vm = vm; // Vue 实例
    this.key = key; // 响应式属性的键名
    this.callback = callback; // 更新回调函数

    this.value = this.get(); // 初始化获取响应式属性的值
  }

  get() {
    Dep.target = this; // 设置当前的 Watcher
    const value = this.vm[this.key]; // 触发属性的 getter，进行依赖收集
    Dep.target = null; // 清空当前的 Watcher
    return value;
  }

  addDep(dep) {
    dep.addSubscriber(this); // 将当前 Watcher 添加到依赖的订阅者数组中
  }

  update() {
    const newValue = this.get(); // 获取最新的属性值
    const oldValue = this.value;
    if (newValue !== oldValue) {
      this.value = newValue;
      this.callback.call(this.vm, newValue, oldValue); // 执行更新回调函数
    }
  }
}
```

最后，我们需要在响应式属性的 getter 中进行依赖收集，将当前的 Watcher 添加到对应的 `Dep` 实例中。这样，当响应式属性发生变化时，`Dep` 实例会通知所有依赖的 `Watcher` 进行更新。

```javascript
function defineReactive(obj, key, val) {
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      dep.depend(); // 依赖收集
      return val;
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) {
        return;
      }
      val = newVal;
      dep.notify(); // 派发更新
    }
  });
}

```

通过以上的简化版源码实现，Vue 在访问响应式属性时会触发 `Dep` 的 `depend` 方法进行依赖收集，将当前的 `Watcher` 添加到依赖的订阅者数组中。当响应式属性发生变化时，会触发 `Dep` 的 `notify` 方法，通知所有依赖的 `Watcher` 进行更新操作。

需要注意的是，以上是一个简化版的实现，Vue 的实际源码中还包含了更多的细节和优化。但这个简化版的实现能够帮助你理解 Vue 响应式系统的基本原理。