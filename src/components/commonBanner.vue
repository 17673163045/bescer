<!--这是商品的常规轮播组件,与顶部轮播区分,下面3个轮播可以复用-->
<template>
  <div id="commonBanner">
    <div class="swiper-container swiper-container-horizontal">
      <div class="swiper-wrapper">
        <div class="swiper-item swiper-slide" v-for="(item,index) in imgList" :key="index">
          <img class="goodsImg" :src="item.ImgUrl" alt="">
          <p class="goodsName" v-text="item.Name"></p>
          <p class="goodsPrice">
            <span class="rmb">￥</span><span class="rmb price" v-text="item.Price"></span>
          <span class="size">/</span><span class="size" v-text="item.Size"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.swiperinit();
  },
  methods: {
    swiperinit() {
      var swiper = new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        slidesPerView: 2.3,
        paginationClickable: true,
        spaceBetween: 20,
        autoplay: 0
      });
    }
  },
  props: ["imgList"]
};
</script>

<style lang="scss" scoped>
#commonBanner {
  height: r(260);
  width: r(375);
  margin: 0 auto;
  padding: r(10) 0 r(30) 0;
  background-color:rgb(248, 248, 248);
}
.swiper-container {
  box-sizing:content-box;
  height: r(220);
  padding-left:r(16)
}
.swiper-slide {
  height: r(220);
  border-radius: r(10);
  border:1px solid rgb(230, 224, 224);
  background-color:#fff;
}
.goodsImg {
  display:block;
  height: r(140);
  width:r(140);
}
.goodsName {
  height: r(40);
  font-size:r(14);
  font-weight:bold;
  width: 100%;
  padding-left:r(16);
}
.goodsPrice {
  height: r(40);
  width: 100%;
  padding-left:r(16);
}
.goodsPrice .rmb{
  font-size:r(16);
  color:rgb(204, 22, 22);
}
.goodsPrice .size{
  color:#999;
  font-size:r(16);
}
</style>