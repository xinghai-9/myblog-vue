<template>
  <div id="home">
    <main-content />
  </div>
</template>

<script>
import MainContent from "./childComps/MainContent";

export default {
  name: "Home",
  components: {
    MainContent
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex1", 1);
    });
  }
};
</script>

<style scoped></style>
