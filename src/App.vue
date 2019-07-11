<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  mounted() {
    this.$apis.getPhp().then((res)=>{
      console.log(res)
    })
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30+30px;
}
</style>
