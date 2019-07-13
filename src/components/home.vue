<template>
  <div id="home">
    <p>主页</p>
    <div class="blank"></div>
    <div class="bottom">我是底部</div>
    <p><router-link to="/usermy">我的</router-link></p>
    <p><router-link to="/goodsList">商品列表</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.$apis.goodsDetail().then((res)=>{
      console.log(res)
    })
  }   
};
</script>

<style lang="scss">
  #home{
    
  }
  .blank{
    height: 1200px;
  }
</style>
