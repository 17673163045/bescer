//vue对象
import Vue from 'vue';

//App组件,顶级组件
import App from './App';

//路由配置
import router from './router';

//全局组件,指令,apis,方法,过滤器,需要传入vue实例对象
import core from "@/core/core.config";
Vue.use(core);

//vuex全局仓库
import store from '@/core/store'

//淘宝响应式框架
import 'lib-flexible/flexible.js'

//mock模拟数据


//mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
