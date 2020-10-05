<template>
  <el-card class="box-card">
    <ve-line :data="timeData" :settings="chartSettings" />
    <h3>每月博客发布量</h3>
  </el-card>
</template>

<script>
export default {
  name: "BlogTimeChart",
  props: {
    timeData: {
      type: Object
    }
  },
  data() {
    return (this.chartSettings = {
      metrics: ["publishNum"],
      dimension: ["date"],
      area: true,
      labelMap: {
        date: "日期",
        publishNum: "博客发布数量"
      }
    });
  }
};
</script>

<style scoped>
.box-card {
  width: 1000px;
  margin: 50px auto;
  text-align: center;
}
</style>
