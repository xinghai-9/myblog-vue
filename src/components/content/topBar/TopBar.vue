<template>
  <div id="top-bar">
    <el-row :gutter="20">
      <el-col :span="7">
        <el-image :src="require('@/assets/img/logo.png')" fit="fill" class="img"></el-image>
      </el-col>
      <el-col :span="9">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <el-menu-item index="1"><i class="iconfont icon-home">首页</i></el-menu-item>
          <el-menu-item index="2"><i class="iconfont icon-category">分类</i></el-menu-item>
          <el-menu-item index="3"><i class="iconfont icon-cc-tag-more">标签</i></el-menu-item>
          <el-menu-item index="4"><i class="iconfont icon-guidang">归档</i></el-menu-item>
          <el-menu-item index="5"><i class="iconfont icon-guanyuwomen">关于我</i></el-menu-item>

        </el-menu>
      </el-col>
      <el-col :span="6">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input" class="input">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TopBar",
    data() {
      return {
        activeIndex: '1',
        input: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);

      }
    }
  }
</script>

<style scoped>
  #top-bar {
    background-color: #545c64;
    height: 60px;
  }

  .img {
    padding-left: 280px;
  }

  .input {
    width: 300px;
    margin-top: 11px;
  }
</style>
