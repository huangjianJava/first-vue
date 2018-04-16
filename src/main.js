// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
// import Apple from './components/Apple'
// import Banana from './components/Banana'

Vue.config.productionTip = false

Vue.use(VueRouter)

let router = new VueRouter({    //前端路由设置,路由可以带参数，可以嵌套,可以命名，重定向
  routes: [
    {
      path: '/',
      redirect: '/apple',
    },
    {
      path: '/apple',
      component: Apple,
      // children: [    路由嵌套，子路由
      //   {
      //     path: 'apple-to-banana',
      //     component: Banana
      //   }
      // ]
    },
    {path: '/banana',component: Banana}
  ]
})

/* eslint-disable no-new */
new Vue({
  //router: router,
  el: '#app',
  components: { Layout },
  template: '<Layout/>'
})
