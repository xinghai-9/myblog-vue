<template>
  <div>
    <base-edit
      :tableData="tableData"
      @updateTypeData="update"
      @deleteTypeData="deleteType"
    ></base-edit>
  </div>
</template>

<script>
import BaseEdit from "components/content/admin/BaseEdit";
import { getAllType, deleteType } from "network/type";

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
    update() {
      this.getAllType();
    },
    deleteType(row) {
      deleteType(row).then(res => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.update();
      });
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
