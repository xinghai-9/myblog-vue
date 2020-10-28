<template>
  <el-tabs type="border-card">
    <el-tab-pane :label="typeItem.name" v-for="typeItem in type">
      <blog-list-item
        class="blog-list-item"
        v-for="blogItem in getCurrentData(typeItem.name)"
        :item="blogItem"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import BlogListItem from "components/content/blogs/BlogListItem";
import { getAllType } from "network/type";
import { getAllBlog } from "network/blog";

export default {
  name: "TypesCard",
  components: {
    BlogListItem
  },
  data() {
    return {
      blog: [],
      type: []
    };
  },
  computed: {
    getCurrentData() {
      return name => {
        return this.blog.filter(item => {
          return item.typeName === name;
        });
      };
    }
  },
  created(){
    this.getAllType(),
    this.getAllBlog()
  },
  methods:{
    getAllType(){
      getAllType().then(res => {
        this.type = res;
      })
    },
    getAllBlog(){
      getAllBlog().then(res => {
        this.blog = res;
      })
    }
  }
};
</script>

<style scoped>
.el-tabs {
  margin-top: 100px;
  margin-left: 50%;
  transform: translateX(-600px);
  width: 1200px;
}

.blog-list-item {
  margin-left: 50%;
  transform: translateX(-380px);
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
