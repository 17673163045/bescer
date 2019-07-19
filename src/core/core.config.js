import apis from "./apis"
import globalComponents from "./globalComponents"
import globalFns from "./globalFns"
export default (Vue)=>{
    globalComponents(Vue)
    Vue.prototype.$apis = apis;
    Vue.prototype.$globalFns = globalFns;
    Vue.prototype.$eventHub = new Vue()
}