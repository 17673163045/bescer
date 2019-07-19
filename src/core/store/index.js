import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const state = {
  City: "上海",
  shopCarList: [],
  selectedSize: ""
}
const mutations = {
  //点击购物车小图标购买逻辑
  addByicon(state, data) {
    let ShopGoodsobj = {
      id: data.ID || data.Id,
      Name: data.Name,
      Price: data.CurrentPrice,
      Num: 1,
      Size: data.Size,
      ImgUrl: data.ImgUrl
    };
    if (!state.shopCarList.length) {
      state.shopCarList.push(ShopGoodsobj);
      window.localStorage.setItem("shopCarList", JSON.stringify(state.shopCarList))
      return;
    } else {
      let flag = true;
      state.shopCarList.map((el) => {
        if (el.id == data.ID || data.iD || data.Id) {
          el.Num++;
          window.localStorage.setItem("shopCarList", JSON.stringify(state.shopCarList))
          flag = false;
        }
      })
      if (flag) {
        state.shopCarList.push(ShopGoodsobj);
        window.localStorage.setItem("shopCarList", JSON.stringify(state.shopCarList))
      }
    }
  },
  selectSize(state, item) {
    state.selectedSize = item;
    state.selectedSize.Num = 1;
    console.log(state.selectedSize)
  }
}
const getters = {
  
}
const actions = {

}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
