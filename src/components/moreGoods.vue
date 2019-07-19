<!--这是更多商品入口组件-->
<template>
  <div id="moreGoods">
    <img class="moreGoodsImg" :src="ImgUrl" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  props:['ImgUrl','routePath']
};
</script>

<style lang="scss" scoped>
#moreGoods{
  height:r(140);
  width:r(375);
  margin:0 auto;
}
.moreGoodsImg{
  width:100%;
  height:100%;
}
  
</style>