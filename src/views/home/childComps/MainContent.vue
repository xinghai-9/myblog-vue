<template>
  <el-row :gutter="20">
    <el-col :span="15">
      <blog-list/>
    </el-col>
    <el-col :span="5">
      <content-card/>
    </el-col>
  </el-row>
</template>

<script>
  import BlogList from "components/content/blogs/BlogList";
  import ContentCard from "components/common/card/ContentCard";

  export default {
    name: "MainContent",
    components: {
      BlogList,
      ContentCard
    }
  }
</script>

<style scoped>
  .el-row{
    margin-top: 100px;
  }

</style>
