<template>
  <div>
    <my-tags-cloud @tagCloudClick="getChildClick" />
    <blog-list-item
      class="blog-list-item"
      v-for="blogItem in blog"
      :item="blogItem"
      v-show="tag_name !== ''"
    >
      <el-tag size="small">{{ tag_name }}</el-tag>
    </blog-list-item>
  </div>
</template>

<script>
import MyTagsCloud from "components/common/tagscloud/MyTagsCloud";
import BlogListItem from "components/content/blogs/BlogListItem";

import { getBlogsByTagId } from "network/tag";

export default {
  name: "Tags",
  components: {
    MyTagsCloud,
    BlogListItem
  },
  data() {
    return {
      tag_name: "",
      blog: []
    };
  },
  methods: {
    getChildClick(data) {
      getBlogsByTagId(data.id).then(res => {
        this.blog = res;
      });
      this.tag_name = data.name;
    }
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
