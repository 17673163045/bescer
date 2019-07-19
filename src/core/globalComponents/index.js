//mint-ui的轮播组件
import {
  Swipe,
  SwipeItem,
  Tabbar,
  TabItem
} from 'mint-ui';
import bottomToggle from './bottomToggle';
import PriceThrough from "./PriceThrough"
export default (Vue) => {
  Vue.component("mt-swipe", Swipe);
  Vue.component("mt-swipe-item", SwipeItem);
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component("bottomToggle", bottomToggle)
  Vue.component("PriceThrough", PriceThrough)
}
