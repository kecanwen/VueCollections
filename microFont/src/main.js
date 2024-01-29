import { createApp } from 'vue'
import { registerMicroApps, start, setDefaultMountApp} from "qiankun"
import microApps from './microApps'
import './style.css'
import App from './App.vue'

//创建主应用实例
const app = createApp(App);

const subApps = microApps.map(item => {
  return {
    ...item,
    // loader
  }
})

registerMicroApps(subApps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
});

setDefaultMountApp('/sub-react')
start();

app.mount('#app')
