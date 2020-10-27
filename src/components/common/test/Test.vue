<template>
  <div>
    <h2>测试后端接口</h2>
    {{tag}}
  </div>
</template>

<script>
import { getAllTag } from "network/tag";

export default {
  created(){
    this.getAllTag()
  },
  data() {
    return {
      tag: []
    };
  },
  methods: {
    getAllTag() {
      getAllTag().then(res => {
        this.tag = res;
      });
    }
  }
};
</script>

<style scoped></style>
