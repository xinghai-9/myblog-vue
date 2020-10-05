<template>
  <el-card class="box-card">
    <ve-bar :data="viewData" :settings="chartSettings" />
    <h3>博客访问量排行</h3>
  </el-card>
</template>

<script>
export default {
  name: "BlogViewChart",
  props: {
    viewData: {
      type: Object
    }
  },
  data() {
    return (this.chartSettings = {
      metrics: ["views"],
      dataOrder: {
        label: "views",
        order: "desc"
      },
      labelMap: {
        views: "访问量"
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
