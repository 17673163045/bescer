<!--这是精品商品组件,矩形排列,包含酸奶芝士,一见倾心,许愿天使-->
<template>
  <div id="finegoods">
    <div v-for="(item,index) in imgList" :key="index" class="item">
      <img :src="item.ImgUrl" class="itmeImg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: ["imgList"]
};
</script>

<style lang="scss" scoped>
#finegoods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: r(10) 0;
  height: r(250);
  width: r(343);
  margin: 0 auto;
}
#finegoods .item {
  height: r(100);
  width: 48%;
  border-radius: 10px;
}
.item .itmeImg {
  border-radius: 10px;
  height: 100%;
  width: 100%;
}
</style>