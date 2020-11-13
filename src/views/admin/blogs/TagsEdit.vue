<template>
  <div>
    <base-edit
      :tableData="tableData"
      @updateTagData="update"
      @deleteTagData="deleteTag"
    ></base-edit>
  </div>
</template>

<script>
import BaseEdit from "components/content/admin/BaseEdit";
import { getAllTag, deleteTag } from "network/tag";

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
    update() {
      this.getAllTag();
    },
    deleteTag(row) {
      deleteTag(row).then(res => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.update();
      });
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
