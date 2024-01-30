// import store from './store'
const microApps = [
  {
    name: 'brokenSubApp',
    entry: import.meta.env.VITE_APP_SUB_REACT,
    activeRule: '/sub-react'
  },
  {
    name: 'sub-svelte',
    entry: import.meta.env.VITE_APP_SUB_SEVLT,
    activeRule: '/sub-svelte'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subContainer', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      // getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps