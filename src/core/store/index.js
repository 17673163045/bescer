import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const state = {
    num:111
}
const mutations = {
    fn(params){
        return params
    }
}
const getters = {
    count(){
        return xxx
    }
}
const actions = {
    
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})