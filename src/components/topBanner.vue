<!--这是顶部轮播图组件-->
<!--使用组件时请根据"props:xxx.ImgUrl"传入需要的图片url数据-->
<template>
  <div id="topBanner">
    <mt-swipe :auto="3000" class="swip-contain">
      <mt-swipe-item v-for="(item,index) in imgList" :key="index">
        <img class="bannerImg" :src="item.ImgUrl" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  props: ["imgList"]
};
</script>


<style lang="scss" scoped>
#topBanner {
  height: r(180);
  width: r(343);
  margin: 0 auto;
  border-radius: 10px;
}
.swip-contain {
  border-radius: 10px;
}
.bannerImg {
  height: 100%;
  width: 100%;
}
</style>