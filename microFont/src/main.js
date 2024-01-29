import { createApp } from 'vue'
import { registerMicroApps, start} from "qiankun"
import './style.css'
import App from './App.vue'

//创建主应用实例
const app = createApp(App);

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:7100',
    container: '#yourContainer',
    activeRule: '/yourActiveRule',
  }
],
{
  beforeLoad:()=>{
    console.log('开启应用')
  }
}
);

start();

app.mount('#app')
