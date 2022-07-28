import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/index' },// 重定向
        {
            path: '/home',
            meta: { title: '首页' },
            component: () => import(`@/page/home`),
            children: [
                {
                    path: '/index', meta: { title: '首页', roles: ['admin', 'editor'] }, component: () => import(`@/page/index`)
                },
            ]
        },
    ]
})
//push 
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace(to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}

export default router