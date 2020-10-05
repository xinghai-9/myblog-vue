<template>
  <el-card class="box-card">
    <ve-pie :data="tagData" :settings="chartSettings" />
    <h3>各标签占比</h3>
  </el-card>
</template>

<script>
export default {
  name: "TagChart",
  props: {
    tagData: {
      type: Object
    }
  },
  data() {
    return (this.chartSettings = {
      roseType: "radius"
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
