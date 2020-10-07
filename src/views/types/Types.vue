<template>
  <types-card />
</template>

<script>
import TypesCard from "./childComps/TypesCard";

export default {
  name: "Types",
  components: {
    TypesCard
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex1", 2);
    });
  }
};
</script>

<style scoped></style>
