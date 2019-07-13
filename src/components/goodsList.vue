<!--这是商品展示组件,包含蛋糕,西点,大礼包-->
<template>
  <div id="goodsList">
    <p>商品列表</p>
    <ul>
      <li v-for="(item,index) in goodsList" :key=index>
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList:[]
    };
  },
  created() {
    this.$apis.goodsList().then((res)=>{
      console.log("请求1次")
      this.goodsList = res.data
    })
  }   
};
</script>

<style lang="scss">
  a:active{
    color:#000;
  }
  a:link{
    color:#000;
  }
  a:visited{
    color:#000
  }
  a:hover{
    color:#f90
  }
</style>