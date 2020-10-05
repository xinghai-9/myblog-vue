<template>
  <el-card class="box-card">
    <ve-pie :data="cateData" :settings="chartSettings" />
    <h3>各分类占比</h3>
  </el-card>
</template>

<script>
export default {
  name: "CategoryChart",
  props: {
    cateData: {
      type: Object
    }
  },
  data() {
    return (this.chartSettings = {
      dimension: "type",
      metrics: "amount"
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
