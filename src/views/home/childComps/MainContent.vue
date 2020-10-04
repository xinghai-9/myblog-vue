<template>
  <el-row :gutter="20">
    <el-col :span="15">
      <!--中间部分博客列表-->
      <blog-list class="blog-list" :blog="blog"/>
    </el-col>
    <el-col :span="5">
      <!--中间部分右侧卡片-->
      <content-card :type="type" :tag="tag" :latest="getLatestBlog"/>
    </el-col>
  </el-row>
</template>

<script>
  import BlogList from "components/content/blogs/BlogList";
  import ContentCard from "components/common/card/ContentCard";

  import {data} from "common/mixin";

  export default {
    name: "MainContent",
    components: {
      BlogList,
      ContentCard
    },
    computed: {
      getLatestBlog(){
         let latestName = [];
         for(let item of this.blog){
           latestName.push(item.title);
         }
         return latestName;
      }
    },
    mixins: [data]
  }
</script>

<style scoped>
  .el-row{
    margin-top: 100px;
  }

  .blog-list{
    margin-left: 300px;
  }

</style>
