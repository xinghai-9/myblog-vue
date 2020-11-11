<template>
  <el-tabs v-model="activeName" type="card" >
    <el-tab-pane label="发布" name="first">
      <blogs-info :types="types" :tags="tags" :form="form" @changeInfoActiveName="toChangeInfoActiveName" @changeInfoForm="toChangeInfoForm"/>
    </el-tab-pane>
    <el-tab-pane label="列表" name="second">
      <blogs-edit :types="types" :tags="tags" @changeActiveName="toChangeActiveName" @changeForm="toChangeForm"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import BlogsInfo from "./childComps/BlogsInfo";
import BlogsEdit from "./childComps/BlogsEdit";

import { getAllTag } from "network/tag";
import { getAllType } from "network/type";

export default {
  name: "BlogsInput",
  components: {
    BlogsInfo,
    BlogsEdit
  },
  data() {
    return {
      activeName: "first",
      tags: [],
      types: [],
      form: {},
    };
  },
  methods: {
    getAllTag() {
      getAllTag().then(res => {
        this.tags = res;
      });
    },
    getAllType() {
      getAllType().then(res => {
        this.types = res;
      });
    },
    toChangeActiveName(params) { //从blogs-edit跳转到blogs-info
      this.activeName = params;
    },
    toChangeForm(params){
      this.form = params;
    },
    toChangeInfoForm(){
      this.form = {}
    },
    toChangeInfoActiveName(params){
      this.activeName = params; 
    }
  },
  created() {
    this.getAllTag();
    this.getAllType();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex2", 1);
    });
  }
};
</script>

<style scoped></style>
