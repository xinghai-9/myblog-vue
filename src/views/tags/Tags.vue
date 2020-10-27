<template>
  <div>
    <my-tags-cloud @tagCloudClick="getChildClick" />
    <blog-list-item
      class="blog-list-item"
      v-for="blogItem in getCurrentData(tag_name)"
      :item="blogItem"
      v-show="tag_name !== ''"
    >
      <el-tag style="margin-left: 350px;">{{ tag_name }}</el-tag>
    </blog-list-item>
  </div>
</template>

<script>
import MyTagsCloud from "components/common/tagscloud/MyTagsCloud";
import BlogListItem from "components/content/blogs/BlogListItem";

export default {
  name: "Tags",
  components: {
    MyTagsCloud,
    BlogListItem
  },
  computed: {
    getCurrentData() {
      return tag_name => {
        return this.blog.filter(item => {
          return item.tag.indexOf(tag_name) !== -1;
        });
      };
    }
  },
  data() {
    return {
      tag_name: "",
      blog: []
    };
  },
  methods: {
    getChildClick(data) {
      this.tag_name = data;
    },
    getAllBlog(){
      getAllBlog().then(res => {
        this.blog = res;
      })
    }
  },
  created(){
    this.getAllBlog();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex1", 3);
    });
  }
};
</script>

<style scoped>
.blog-list {
  margin-left: 50%;
  transform: translateX(-430px);
}

.blog-list-item {
  margin-left: 50%;
  transform: translateX(-380px);
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
