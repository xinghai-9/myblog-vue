<template>
  <el-card class="blog-detail">
    <div slot="header">
      <div class="date-view">
        <i class="el-icon-date">2020/9/27</i>
        <i class="el-icon-view">2354</i>
      </div>
    </div>
    <img
      src="https://images.unsplash.com/photo-1601212220502-f78f3460b116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      class="image">
    <el-divider/>
    <editor class="editor"/>
  </el-card>
</template>

<script>
  import Editor from "components/common/editor/Editor";

  export default {
    name: "BlogDetail",
    components: {
      Editor
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .date-view i {
    margin-right: 30px;
    color: gray;
  }

  .image {
    width: 960px;
    height: 500px;
    border-radius: 5px;
  }

  .blog-detail {
    margin-bottom: 100px;
  }

  .editor{
    width: 900px !important;
    /*height: 1000px !important;*/
  }
</style>
