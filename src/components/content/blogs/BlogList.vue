<template>
  <el-card class="blogs-card">
    <div slot="header" class="clearfix">
      <span>博客</span>
      <el-button style="float: right; padding: 3px 0" type="text">共18篇</el-button>
    </div>
    <div v-for="o in 8" :key="o" class="text item">
      <blog-list-item/>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </el-card>
</template>

<script>
  import BlogListItem from "./BlogListItem";

  export default {
    name: "BlogList",
    components: {
      BlogListItem
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .blogs-card {
    width: 850px;
    margin-left: 300px;
  }

  .el-pagination{
    text-align: center;
    margin-top: 20px;
  }
</style>
