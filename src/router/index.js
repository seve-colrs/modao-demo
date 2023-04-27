import Vue from 'vue'
import VueRouter from 'vue-router'
//引入 登录组件
import Login from '@/components/Login.vue'
// 引入 主页
import Home from '@/components/Home.vue'
//引入 技术研发 子组件
import TecDvp from '@/components/TecDvp.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home,
            children: [{
                path: 'tecdvp',
                component: TecDvp
            }]
        }
    ]
})

export default router