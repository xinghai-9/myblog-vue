<template>
  <div class="content-card">
    <card cardName="分类">

      <el-row v-for="o in 6" :key="o" justify="center" align="middle">
        <el-col :span="12">
<!--          <el-tag type="success" class="amount">数据结构</el-tag>-->
          <span>数据结构</span>
        </el-col>
        <el-col :span="12">
          <span>18</span>
        </el-col>
        <el-divider/>
      </el-row>

    </card>
    <card cardName="标签">
      <tags-cloud/>
    </card>
    <card cardName="最新">
      <el-row v-for="o in 6" :key="o" justify="center" align="middle">
        <el-col :span="24">
          基于SpringBoot+Vue的响应式个人博客
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

  .img{
    width: 348px;
    border-radius: 5px;
  }
</style>
