<!--这是通告组件-->
<template>
  <div id="notice">
    <span class="noticeTxt">通知</span>
    <span class="scrollTxt">
      <marquee
        behavior
        direction
      >贝思客官方申明：我司近期发现有客户通过非正常渠道售卖的代金卡无法正常使用，目前我司正通过法律途径解决此问题。我司在此郑重申明，从未授权过任何渠道售卖我司代金卡，请客户通过正常渠道（如：官网、公司销售）进行购买消费。​</marquee>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#notice {
  width: r(343);
  margin: 0 auto;
  overflow: hidden;
}
.noticeTxt {
  text-align: center;
  float: left;
  color: #fff;
  background-color: #1fb1b8;
  border-radius: 4px;
  height: r(20);
  line-height: r(20);
  width: r(30);
  font-size: 12px;
}
.scrollTxt {
  float: left;
  height: r(20);
  line-height: r(20);
  width: r(306);
  color: #1fb1b8;
  margin-left: r(4);
  font-size: 16px;
}
</style>