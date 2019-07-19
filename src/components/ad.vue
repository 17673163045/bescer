<!--这是广告组件,放在首页的,描述优点以及广告土司的诱惑-->
<template>
  <div id="ad">
    <p class=imgCotain>
      <img class="detailImg" src="https://res.bestcake.com/images/newIndex/title.png?v=1" />
    </p>
    <p class=imgCotain>
      <img class="adImg" src="https://res.bestcake.com/images/newindex/tusi.gif" alt />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#ad {
  padding: 0 r(16);
}
.imgCotain{
  text-align:center;
}
.detailImg {
  width: r(343);
  height: r(34);
}
.adImg {
  width: r(343);
  height: r(75);
}
</style>