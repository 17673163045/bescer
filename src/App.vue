<template>
  <div id="app">
    <div class="main">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <bottomToggle></bottomToggle>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  display:flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.main{
  height: 100%;
  width: 100%;
}
</style>
