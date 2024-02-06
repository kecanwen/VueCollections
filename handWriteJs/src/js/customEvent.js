// 创建自定义事件
const customEvent = new Event('myEvent');

// 添加事件监听器
document.addEventListener('myEvent', function(event) {
  console.log('Custom event triggered!');
});

// 触发自定义事件
document.dispatchEvent(customEvent);
