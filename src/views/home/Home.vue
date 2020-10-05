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
  }
};
</script>

<style scoped></style>
