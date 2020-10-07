<template>
  <div class="detail">
    <blog-detail :idDetail="getIdDetail" />
    <comment />
  </div>
</template>

<script>
import Comment from "components/common/comment/Comment";
import BlogDetail from "./childComps/BlogDetail";

import { data } from "common/mixin";

export default {
  name: "Detail",
  components: {
    Comment,
    BlogDetail
  },
  computed: {
    getIdDetail() {
      return this.blog.filter(item => {
        return this.$route.params.id === item.id;
      })[0];
    }
  },
  mixins: [data]
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
