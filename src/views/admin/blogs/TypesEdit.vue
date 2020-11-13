<template>
  <div>
    <base-edit :tableData="tableData" @updateTypeData="update"></base-edit>
  </div>
</template>

<script>
import BaseEdit from "components/content/admin/BaseEdit";
import { getAllType } from "network/type";

export default {
  name: "TypesEdit",
  components: {
    BaseEdit
  },
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    getAllType() {
      getAllType().then(res => {
        this.tableData = res;
      });
    },
    update(){
      this.getAllType();
    }
  },
  created() {
    this.getAllType();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex2", 2);
    });
  }
};
</script>

<style scoped></style>
