import Vue from 'vue'
import Router from 'vue-router'
import app from "@/App";  //app,顶级组件
import home from '@/components/home' //主页
import bottomToggle from "@/components/bottomToggle"; //底部导航栏
import usermy from "@/components/usermy";  //用户"我的"
import goodsList from "@/components/goodsList";//商品详情

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'app',
      component: app,
      redirect: "/home",
    },
    {
      path:"/home",
      component:home,
    },
    {
      path:"/usermy",
      component:usermy
    },
    {
      path:"/goodsList",
      component:goodsList,
      meta:{
        bool:true
      }
    }
  ]
})
