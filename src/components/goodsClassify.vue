<template>
  <div id="goodsClassify">
    <classifyTop :topindex="topindex" @changeTopindex="changeTopindex($event)"></classifyTop>
    <div class="ZY" v-if="topindex==0">
      <classifySelect :cindex="cindex" @changeCindex="selectCindex($event)"></classifySelect>
      <classifyJD :imgList="proList[JDindex].classifyList" v-if="JDindex==cindex"></classifyJD>
      <classifyJD :imgList="proList[NSindex].classifyList" v-if="NSindex==cindex"></classifyJD>
      <classifyJD :imgList="proList[JZindex].classifyList" v-if="JZindex==cindex"></classifyJD>
    </div>
    <div class="besi" v-if="topindex==1">
      <classifyBesi></classifyBesi>
      <classifyJD :imgList="proList[3].classifyList"></classifyJD>
    </div>
  </div>
</template>

<script>
import classifyTop from "@/components/classifyTop";
import classifySelect from "@/components/classifySelect";
import classifyJD from "@/components/classifyJD";
import classifyBesi from "@/components/classifyBesi";

export default {
  data() {
    return {
      topindex: 0,
      JDindex: 0, //经典的组件开关
      NSindex: 1, //女神的组件开关
      JZindex: 2, //伴手礼的组件开关
      cindex: 0, //组件开关,传参到子组件,通过子组件改变.
      proList: [
        { title: "经典", mark: "KSK", classifyList: [] },
        { title: "女神", mark: "NS", classifyList: [] },
        { title: "伴手礼", mark: "JZ", classifyList: [] },
        { title: "乳品", mark: "RP", classifyList: [] }
      ],
      cakelist: []
    };
  },
  watch: {},
  mounted() {
    this.$apis.getClassify().then(res => {
      this.cakelist = this.$globalFns.getImgUrl2(res.data.Tag.cakelist);
      this.selectProByNo(this.proList, this.cakelist);
    });
  },
  methods: {
    // 筛选数据,传入"包含货号和对应数组的对象"和"cakelist商品列表数组",筛选不同货号商品到不同的数组
    selectProByNo(proList, cakelist) {
      proList.forEach(item => {
        cakelist.forEach(el => {
          if (el.SupplyNo.indexOf(item.mark) != -1) {
            item.classifyList.push(el);
          }
        });
      });
      return proList;
    },
    selectCindex(res) {
      this.cindex = res;
    },
    changeTopindex(res) {
      this.topindex = res;
    }
  },
  components: {
    classifyTop,
    classifySelect,
    classifyJD,
    classifyBesi
  }
};
</script>
<style lang="scss" scoped>
</style>