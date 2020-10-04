<template>
  <el-tabs type="border-card">
    <el-tab-pane :label="typeItem.type_name" v-for="typeItem in type">
      <blog-list-item class="blog-list-item" v-for="blogItem in getCurrentData(typeItem.type_name)" :item="blogItem"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import BlogListItem from "components/content/blogs/BlogListItem";
  import {data} from "common/mixin";

  export default {
    name: "TypesCard",
    components: {
      BlogListItem
    },
    computed: {
      getCurrentData(){
        return (type_name)=>{
          return this.blog.filter((item)=>{return item.type === type_name});
        }
      }
    },
    mixins: [data]
  }
</script>

<style scoped>
  .el-tabs{
    margin-top: 100px;
    margin-left: 50%;
    transform: translateX(-600px);
    width: 1200px;
  }

  .blog-list-item{
    margin-left: 50%;
    transform: translateX(-380px);
    margin-top: 50px;
    margin-bottom: 50px;
  }

</style>
