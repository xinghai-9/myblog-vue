<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="发布" name="first">
      <blogs-info />
    </el-tab-pane>
    <el-tab-pane label="列表" name="second">
      <blogs-edit />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import BlogsInfo from "./childComps/BlogsInfo";
import BlogsEdit from "./childComps/BlogsEdit";

export default {
  name: "BlogsInput",
  components: {
    BlogsInfo,
    BlogsEdit
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    }
  },
  created() {},
  mounted() {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex2", 1);
    });
  }
};
</script>

<style scoped></style>
