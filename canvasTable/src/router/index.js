import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/Example'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Example',
            component: Example,
        },
    ],
})
