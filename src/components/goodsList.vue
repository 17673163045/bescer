<!--这是商品展示组件,包含蛋糕,西点,大礼包-->
<template>
  <div id="goodsList">
    <div class="item" v-for="(item,index) in imgList" :key="index">
      <img :src="item.ImgUrl" class="itmeImg">
      <p class="actName" v-text="item.ActName"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props:["imgList"]
};
</script>

<style lang="scss" scoped>
#goodsList{
  margin:0 auto;
  text-align:center;
  width:r(343);
  height:r(220);
  padding:r(20) r(0);
  display: flex;
  flex-wrap: wrap;
}
.item{
  font-size:r(12);
  height:r(90);
  width:25%;
}
.itmeImg{
  height:r(50)
}
.actName{
  padding:r(10) 0;
  white-space: nowrap;
}
</style>