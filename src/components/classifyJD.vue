<!--这是分类的"经典部分"组件-->
<template>
  <div id="classifyJD">
    <div class="contain">
      <div class="item" v-for="(item,index) in imgList" :key="index">
        <img :src="item.ImgUrl" class="itemImg" @click="topath(item)" />
        <p class="goodsName" v-text="item.Name"></p>
        <p class="goodsDetail" v-text="item.Means"></p>
        <p class="buy">
          <span class="symbolrmb">￥</span>
          <span class="price" v-text="item.CurrentPrice + '.00'"></span>
          <span class="size" v-text="'/ ' + item.Size"></span>
          <span class="iconfont icon-ai-cart" @click="addByicon(item)"></span>
        </p>
      </div>
    </div>
    <PriceThrough></PriceThrough>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      aaa: this.$store.state.shopCarList,
      ...mapState(["shopCarList"])
    };
  },
  mounted() {},

  watch: {
    aaa: {
      handler(newobj) {
        console.log(newobj);
        console.log(JSON.parse(window.localStorage.getItem("shopCarList")));
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    ...mapMutations(["addByicon"]),
    topath(item) {
      this.$router.push({
        path: "/detail",
        query: item
      });
    }
  },
  props: ["imgList"]
};
</script>

<style lang="scss" scoped>
.contain {
  display: flex;
  flex-wrap: wrap;
  width: r(375);
  margin: 0 auto;
  height: auto;
}
#classifyJD .item {
  width: 50%; //187
  height: r(230);
  padding: 0 r(12);
}
.itemImg {
  height: r(140);
  width: r(160);
}
.goodsName {
  font-size: r(14);
  color: rgb(15, 15, 15);
}
.goodsDetail {
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.buy .symbolrmb {
  color: red;
  font-size: r(12);
}
.buy .price {
  color: red;
  font-size: r(13);
}
.buy .oldPrice {
  color: #999;
  text-decoration: line-through;
}
.buy .size {
  color: #999;
}
.buy .iconfont {
  color: #1fb1b9;
  font-size: r(26);
}
</style>