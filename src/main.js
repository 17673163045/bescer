//vue对象
import Vue from 'vue';

//App组件,顶级组件
import App from './App';

//路由配置
import router from './router';

//全局组件,指令,apis,方法,过滤器,需要传入vue实例对象
import core from "@/core/core.config";
Vue.use(core);

//淘宝响应式框架
import 'lib-flexible/flexible.js'

//mock模拟数据


//vuex


//


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
