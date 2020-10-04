<template>
  <div class="detail">
    <blog-detail/>
<!--    <div id="comments"></div>-->
    <comment :comments="commentData"/>
  </div>
</template>

<script>
  import * as CommentData from 'network/mockdata'
  import Comment from 'components/common/comment/Comment'
  import BlogDetail from "./childComps/BlogDetail";

  export default {
    name: "Detail",
    components: {
      Comment,
      BlogDetail
    },
    data() {
      return {
        commentData: [],
      }
    },
    created() {
      this.commentData = CommentData.comment.data;

    },
    methods: {
    }
  }
</script>

<style scoped>
  .detail {
    width: 1000px;
    margin-left: 50%;
    transform: translateX(-500px);
    margin-top: 100px;
  }
</style>
