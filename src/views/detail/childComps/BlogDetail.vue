<template>
  <el-card class="blog-detail">
    <div slot="header">
      <div class="date-view">
        <i class="el-icon-date">{{ blog.createTime }}</i>
        <i class="el-icon-view">{{ blog.viewNum }}</i>
        <i class="el-icon-star-off">{{ blog.favoriteNum }}</i>
        <i class="el-icon-chat-dot-round">{{ blog.commentNum }}</i>
      </div>
    </div>
    <img :src="blog.firstPicture" class="image" />
    <el-divider />
    <div class="content">
      <div v-html="blogContent" />
    </div>
    <br />
    <el-divider>
      <el-button type="primary" icon="el-icon-star-off" circle></el-button
    ></el-divider>
  </el-card>
</template>

<script>
import { getBlogById } from "network/blog";
import marked from "marked";

import "highlight.js/styles/darcula.css";

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export default {
  name: "BlogDetail",
  data() {
    return {
      blog: {},
      blogContent: ""
    };
  },
  created() {
    this.getBlogById();
  },
  methods: {
    getBlogById() {
      getBlogById(this.$route.params.id).then(res => {
        this.blog = res;
        this.blogContent = marked(this.blog.content || "");
      });
    }
  }
};
</script>

<style scoped>
.date-view i {
  margin-right: 30px;
  color: gray;
}

.image {
  width: 960px;
  height: 600px;
  border-radius: 5px;
}

.blog-detail {
  margin-bottom: 100px;
}

.content {
  margin: 20px 30px;
}
</style>
