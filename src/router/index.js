import Vue from 'vue'
import Router from 'vue-router'
import app from "@/App";  //app,顶级组件
import home from '@/components/home' //主页
import usermy from "@/components/usermy";  //用户"我的"页面
import goodsClassify from "@/components/goodsClassify"; //商品分类页面
import shopTag from "@/components/shopTag"; //购物车页面
import goodsDetail from "@/components/goodsDetail"; //商品详情页面

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
      path: "/goodsClassify",
      component: goodsClassify,
      meta:{
        bool:true
      }
    },
    {
      path:"/shopTag",
      component:shopTag
    },
    {
      path:"/detail",
      component: goodsDetail
    }
  ]
})
