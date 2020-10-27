<template>
  <div class="content-card">
    <card cardName="热门">
      <!--
      <el-row v-for="(item,index) in type" :key="index" justify="center" align="middle" class="">
        <el-col :span="12">
          <span>{{item.type_name}}</span>
        </el-col>
        <el-col :span="12">
          <span>{{item.num}}</span>
        </el-col>
        <el-divider/>
      </el-row>
    -->
    </card>
    <card cardName="标签">
      <tags-cloud :tag="getAllTagName"/>
    </card>
    <card cardName="待定">

    </card>
    <el-image :src="require('@/assets/img/pic.jpg')" fit="fill" class="img"/>
  </div>

</template>

<script>
  import Card from "./Card";
  import TagsCloud from "../tagscloud/TagsCloud";

  import {getAllTag} from "network/tag";
  import {getAllBlog} from "network/blog";
  import {getAllType} from "network/type";

  export default {
    name: "ContentCard",
    components: {
      Card,
      TagsCloud
    },
    created() {
      this.getAllBlog(),
      this.getAllTag(),
      this.getAllType()
    },
    computed: {
      getPopularBlog(){

      },
      getAllTagName(){
        let tagName = [];
        for(let item of this.tag){
          tagName.push(item.name);
        }
        return tagName;
      },
      getAllTypeName(){
        let typeName = [];
        for(let item of this.type){
          typeName.push(item.name);
        }
        return typeName;
      }
    },
    data() {
      return {
        blog: [],
        tag: [],
        type: []
      }
    },
    methods: {
      getAllBlog(){
        getAllBlog().then(res => {
          this.blog = res;
        })
      },
      getAllTag(){
        getAllTag().then(res => {
          this.tag = res;
        })
      },
      getAllType(){
        getAllType().then(res => {
          this.type = res;
        })
      }
    }
  }


</script>

<style scoped>
  .el-row {
    text-align: center;
  }

  .name {
    margin-left: -30px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .content-card {
    margin-left: 10px;
  }

  .img {
    width: 348px;
    border-radius: 5px;
  }


</style>
