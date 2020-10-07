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
        this.timeData = res.time_data;
        this.viewData = res.view_data;
        this.cateData = res.cate_data;
        this.tagData = res.tag_data;
        // console.log(this.timeData);
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
