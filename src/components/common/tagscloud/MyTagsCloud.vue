<template>
  <div id="tag-cloud">
    <div id="tag-cloud-tags">
      <a
        href="#"
        v-for="(item, index) in tag"
        :key="index"
        :style="randomStyle(index)"
        @click="tagCloudClick(item.name)"
      >
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script>
import { getAllTag } from "network/tag";

export default {
  name: "MyTagsCloud",
  data() {
    return {
      tag: []
    };
  },
  computed: {
    randomStyle() {
      return index => {
        return {
          fontSize: parseInt(Math.random() * 31 + 30, 10) + "px",
          color:
            "#" +
            ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).substr(
              -6
            )
        };
      };
    }
  },
  created() {
    this.getAllTag();
  },
  methods: {
    tagCloudClick(item) {
      this.$emit("tagCloudClick", item);
    },
    getAllTag() {
      getAllTag().then(res => {
        this.tag = res;
      });
    }
  }
};
</script>

<style scoped>
@import "~assets/css/my_tags_cloud.css";
</style>
