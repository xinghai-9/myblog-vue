<template>
  <div id="tagscloud">
    <a href="#" :style="randomHexColor(index)" v-for="(item,index) in tag" :key="index">{{item}}</a>
  </div>
</template>

<script>
  import {tagscloud} from "common/tagscloud";

  export default {
    name: "TagsCloud",
    computed: {
      //给标签设置随机颜色
      randomHexColor() {
        return index => {
          return {
            color: "#fff",
            backgroundColor: "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)
          }
        }
      }
    },
    props: {
      tag: {
        type: Array,
        default: []
      }
    },
    updated() {
      tagscloud()
    }

  }
</script>

<style scoped>
  @import "~assets/css/tags_cloud.css";
</style>
