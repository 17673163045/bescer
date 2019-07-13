<!--这是底部切换选项组件-->
<template>
  <div id="bottomToggle">
      <div class="home item">

      </div>
      <div class="classify item"></div>
      <div class="shopBag item"></div>
      <div class="user-my item"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {

  }   
};
</script>

<style lang="scss">
#bottomToggle{
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid red;
    margin-top:4px;
}
#bottomToggle .item{
    flex:1;
    height:50px;
    outline: 1px solid red;
}
  
</style>