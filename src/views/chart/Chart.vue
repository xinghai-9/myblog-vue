<template>
  <div class="chart">
    <blog-time-chart :timeData="timeData" />
    <blog-view-chart :viewData="viewData" />
    <category-chart :cateData="cateData" />
    <tag-chart :tagData="tagData" />
  </div>
</template>

<script>
import BlogTimeChart from "./childComps/BlogTimeChart";
import BlogViewChart from "./childComps/BlogViewChart";
import CategoryChart from "./childComps/CategoryChart";
import TagChart from "./childComps/TagChart";

import { getChartData } from "network/chart";

export default {
  name: "Chart",
  data() {
    return {
      timeData: {},
      viewData: {},
      cateData: {},
      tagData: {}
    };
  },
  components: {
    BlogTimeChart,
    BlogViewChart,
    CategoryChart,
    TagChart
  },
  created() {
    this.getChartData();
  },
  methods: {
    getChartData() {
      getChartData().then(res => {
        this.timeData = res[0];
        this.viewData = res[1];
        this.cateData = res[2];
        this.tagData  = res[3];
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex1", 4);
    });
  }
};
</script>

<style scoped></style>
