// !手写EventBus
class myEventBus{
    constructor() {
        this.handlers = {};// 存储事件  以及对应的回调函数
    }
    
    // * 订阅事件
    subscribe(eventName, callback) {
        if(this.handlers[eventName]){
            this.handlers[eventName].push(callback);
        }else {
            this.handlers[eventName] = [];
        }
    }

    // * 添加一次性 订阅事件
    once(eventName, callback) {
        let self = this;
        this.subscribe(eventName, function(data) {
            callback(data);
            self.unsubscribe(eventName, callback);
        });
    }

    // * 发布事件
    publish(eventName, data) {
        if(this.handlers[eventName]){
            this.handlers[eventName].forEach(callback => callback(data));
        }
    }

    // * 取消订阅事件
    unsubscribe(eventName, callback) {
        if(this.handlers[eventName]){
            this.handlers[eventName].splice(this.handlers[eventName].indexOf(callback), 1);
        }
    }
}