import apis from "./apis"

export default (Vue)=>{
    Vue.prototype.$apis = apis;
    Vue.prototype.$eventHub = new Vue()
}