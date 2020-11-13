<template>
  <div>
    <base-edit :tableData="tableData" @updateTagData="update"></base-edit>
  </div>
</template>

<script>
import BaseEdit from "components/content/admin/BaseEdit";
import { getAllTag } from "network/tag";

export default {
  name: "TagsEdit",
  components: {
    BaseEdit
  },
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getAllTag() {
      getAllTag().then(res => {
        this.tableData = res;
      });
    },
    update(){
      this.getAllTag();
    }
  },
  created() {
    this.getAllTag();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex2", 3);
    });
  }
};
</script>

<style scoped></style>
