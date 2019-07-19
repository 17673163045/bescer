<!--这是分类的"贝斯乳品"组件-->
<template>
  <div id="classifyBesi">
    <div class="rpBox">
      <div class="rp">乳品</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  props: ["imgList"]
};
</script>

<style lang="scss" scoped>
.rpBox {
  width: r(375);
  margin: 0 auto;
  height: r(52);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: r(20) r(120) 0 r(70);
}
.rp {
  text-align: center;
  width: r(40);
  font-size: r(16);
  font-weight: 600;
  border-bottom: 4px solid #1fb1b9;
}
</style>