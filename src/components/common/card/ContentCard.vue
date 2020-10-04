<template>
  <div class="content-card">
    <card cardName="分类">

      <el-row v-for="(item,index) in type" :key="index" justify="center" align="middle" class="">
        <el-col :span="12">
          <span>{{item.type_name}}</span>
        </el-col>
        <el-col :span="12">
          <span>{{item.num}}</span>
        </el-col>
        <el-divider/>
      </el-row>

    </card>
    <card cardName="标签">
      <tags-cloud :tag="tag"/>
    </card>
    <card cardName="最新">
      <el-row v-for="(title,index) in latest" :key="index" justify="center" align="middle">
        <el-col :span="24">
          {{title}}
        </el-col>
        <el-divider/>
      </el-row>
    </card>
    <el-image :src="require('@/assets/img/pic.jpg')" fit="fill" class="img"/>
  </div>

</template>

<script>
  import Card from "./Card";
  import TagsCloud from "../tagscloud/TagsCloud";

  export default {
    name: "ContentCard",
    components: {
      Card,
      TagsCloud
    },
    props: {
      type: {
        type: Array,
        default: []
      },
      tag: {
        type: Array,
        default: []
      },
      latest: {
        type: Array,
        default: []
      }
    },
    data() {
      return {}
    },
    methods: {}
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
