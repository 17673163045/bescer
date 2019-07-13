<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div class="box" v-if="$route.meta.bool"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  }
};
</script>

<style lang="scss">
.box{
  width:100px;
  height:100px;
  background-color:red;
}
</style>
