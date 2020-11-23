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
      <div class="markdown-body" v-html="blogContent" />
    </div>
    <br />
    <el-divider>
      <el-button type="primary" icon="el-icon-star-off" circle></el-button
    ></el-divider>
  </el-card>
</template>

<script>
import { getBlogById } from "network/blog";

import 'github-markdown-css/github-markdown.css' // 然后添加样式markdown-body

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
        let MarkdownIt = require('markdown-it');
        let md = new MarkdownIt();
        this.blogContent = md.render(this.blog.content);
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
