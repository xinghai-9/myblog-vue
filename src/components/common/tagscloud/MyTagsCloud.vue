<template>
  <div id="tag-cloud">
    <div id="tag-cloud-tags">
      <a href="#" v-for="(item, index) in tag" :key="index" :style="randomStyle(index)" @click="tagCloudClick(item)">
        {{item}}
      </a>
    </div>
  </div>
</template>

<script>
  import {data} from "common/mixin";

  export default {
    name: "MyTagsCloud",
    mixins: [data],
    computed: {
      randomStyle() {
        return index => {
          return {
            fontSize: parseInt(Math.random() * 31 + 30, 10) + "px",
            color: "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)
          }
        }
      }
    },
    methods: {
      tagCloudClick(item){
        this.$emit("tagCloudClick",item);
      }
    }
  }
</script>

<style scoped>
@import "~assets/css/my_tags_cloud.css";
</style>