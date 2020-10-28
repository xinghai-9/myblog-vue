<template>
  <div class="detail">
    <blog-detail/>
    <comment />
  </div>
</template>

<script>
import Comment from "components/common/comment/Comment";
import BlogDetail from "./childComps/BlogDetail";

export default {
  name: "Detail",
  components: {
    Comment,
    BlogDetail
  }
};
</script>

<style scoped>
.detail {
  width: 1000px;
  margin-left: 50%;
  transform: translateX(-500px);
  margin-top: 100px;
}
</style>
