import { createApp } from 'vue'
import { registerMicroApps, start} from "qiankun"
import './style.css'
import App from './App.vue'
import { arrayObserver } from '../../vue2ReAarry';

//创建主应用实例
const app = createApp(App);

//注册子应用
registerMicroApps([
  {
    name: 'sub-app1',
    entry: './src/App.vue',
    container: '#app',
  },
], {
  beforeLoad(app) {
    console.log('beforeLoad');
  },
  afterLoad(app) {
    console.log('afterLoad');
  },
});

//启动应用
start()

app.mount('#app')
