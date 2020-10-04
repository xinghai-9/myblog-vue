<template>
  <el-card class="blogs-card">
    <div slot="header" class="clearfix">
      <span>博客</span>
      <el-button style="float: right; padding: 3px 0" type="text">共{{blog.length}}篇</el-button>
    </div>
    <div v-for="(item,index) in getCurrentData" :key="index" class="text item">
      <blog-list-item :item="item"/>
    </div>
    <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :current-page.sync="current"
      :page-size="pageSize"
      :total="blog.length">
    </el-pagination>

  </el-card>

</template>

<script>
  import BlogListItem from "./BlogListItem";

  export default {
    name: "BlogList",
    methods: {
    },
    computed: {
      getCurrentData(){
        let currentNum = (this.current-1) * this.pageSize;
        return this.blog.slice(currentNum,currentNum+this.pageSize)
      }
    },
    data() {
      return {
        current: 1,
        pageSize: 2,
      }
    },
    components: {
      BlogListItem
    },
    props: {
      blog: {
        type: Array,
        default: []
      }
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
  }

  .el-pagination {
    text-align: center;
    margin-top: 20px;
  }
</style>
