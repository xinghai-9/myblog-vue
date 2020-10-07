<template>
  <div id="home">
    <main-content />
  </div>
</template>

<script>
import MainContent from "./childComps/MainContent";

import { getTestData } from "network/test";

export default {
  name: "Home",
  components: {
    MainContent
  },
  created() {
    // this.getTestData();
  },
  methods: {
    getTestData() {
      getTestData().then(res => {
        console.log(res);
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex1", 1);
    });
  }
};
</script>

<style scoped></style>
