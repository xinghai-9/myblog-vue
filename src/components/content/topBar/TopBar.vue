<template>
  <div id="top-bar">
    <el-row :gutter="20">
      <el-col :span="7">
        <el-image :src="require('@/assets/img/logo.png')" fit="fill" class="img"/>
      </el-col>
      <el-col :span="9">

        <!--前台导航栏-->
        <template v-if="this.$route.path.indexOf('/admin') === -1">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect1"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">

            <el-menu-item index="1">
              <i class="iconfont icon-home" :class="{active: 1 === getCurrentIndex1}">首页</i>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="iconfont icon-category" :class="{active: 2 === getCurrentIndex1}">分类</i>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="iconfont icon-cc-tag-more" :class="{active: 3 === getCurrentIndex1}">标签</i>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="iconfont icon-guidang" :class="{active: 4 === getCurrentIndex1}">归档</i>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="iconfont icon-guanyuwomen" :class="{active: 5 === getCurrentIndex1}">关于我</i>
            </el-menu-item>
          </el-menu>
        </template>


        <!--后台管理导航栏-->
        <template v-else>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect2"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">

            <el-menu-item index="1">
              <i class="iconfont icon-home" :class="{active: 1 === getCurrentIndex2}">博客管理</i>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="iconfont icon-category" :class="{active: 2 === getCurrentIndex2}">分类管理</i>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="iconfont icon-cc-tag-more" :class="{active: 3 === getCurrentIndex2}">标签管理</i>
            </el-menu-item>
          </el-menu>
        </template>

      </el-col>

      <el-col :span="6">

        <!--前台搜索框-->
        <template v-if="this.$route.path.indexOf('/admin') === -1">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input" class="input">
          </el-input>
        </template>

        <!--后台头像-->
        <template v-else>
          <el-dropdown placement="top">
            <span class="el-dropdown-link">
                <avatar username="星海" :src="avatarPath" class="avatar"/>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled>星海</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Avatar from 'vue-avatar'

  export default {
    name: "TopBar",
    components: {
      Avatar
    },
    data() {
      return {
        input: '',
        avatarPath: 'https://source.unsplash.com/random/200x200',
        activeIndex: '1',
      };
    },
    computed: {
      getCurrentIndex1() {
        return this.$store.state.currentIndex1;
      },
      getCurrentIndex2() {
        return this.$store.state.currentIndex2;
      }
    },
    methods: {
      changeCurrentIndex1(key) {
        this.$store.commit("changeCurrentIndex1", key)
      },
      changeCurrentIndex2(key) {
        this.$store.commit("changeCurrentIndex2", key)
      },
      handleSelect1(key) {
        key = parseInt(key);
        switch (key) {
          case 1:
            this.$router.push('/home').catch((err) => err);
            this.changeCurrentIndex1(key);
            break;
          case 2:
            this.$router.push('/types').catch((err) => err);
            this.changeCurrentIndex1(key);
            break;
          case 3:
            this.$router.push('/tags').catch((err) => err);
            this.changeCurrentIndex1(key);
            break;
          case 4:
            this.$router.push('/archives').catch((err) => err);
            this.changeCurrentIndex1(key);
            break;
          case 5:
            this.$router.push('/about').catch((err) => err);
            this.changeCurrentIndex1(key);
            break;
        }
      },
      handleSelect2(key){
        key = parseInt(key);
        switch (key){
          case 1:
            this.$router.push('/admin').catch((err) => err);
            this.changeCurrentIndex2(key);
            break;
          case 2:
            this.$router.push('/admin/types').catch((err) => err);
            this.changeCurrentIndex2(key);
            break;
          case 3:
            this.$router.push('/admin/tags').catch((err) => err);
            this.changeCurrentIndex2(key);
            break;
        }
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

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-dropdown {
    float: right;
    margin-top: 6px;
    margin-right: 50px;
  }

  .active {
    color: rgb(255, 208, 75) !important;
  }
</style>
