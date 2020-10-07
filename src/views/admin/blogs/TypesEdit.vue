<template>
  <div>这里是分类管理页面</div>
</template>

<script>
export default {
  name: "TypesEdit",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex2", 2);
    });
  }
};
</script>

<style scoped></style>
