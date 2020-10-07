<template>
  <div>这里是标签管理页面</div>
</template>

<script>
export default {
  name: "TagsEdit",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex2", 3);
    });
  }
};
</script>

<style scoped></style>
