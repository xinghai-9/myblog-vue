<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top" type="success" size="large">
        <blog-list-item/>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <blog-list-item/>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <blog-list-item/>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
  import BlogListItem from "components/content/blogs/BlogListItem";

  export default {
    name: "Archives",
    components: {
      BlogListItem
    },
    data() {
      return {

      }
    }

  }
</script>

<style scoped>
.block{
  width: 1200px;
  margin: 100px auto 0;
}
</style>
