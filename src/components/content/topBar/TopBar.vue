<template>
  <div id="top-bar">
    <el-row :gutter="20">
      <el-col :span="7">
        <el-image
          :src="require('@/assets/img/logo.png')"
          fit="fill"
          class="img"
        />
      </el-col>
      <el-col :span="9">
        <!--前台导航栏-->
        <template v-if="this.$route.path.indexOf('/admin') === -1">
          <el-menu
            :default-active="String.toString(getCurrentIndex1)"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect1"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <i
                class="iconfont iconicon_home"
                :class="{ active: 1 === currentIndex }"
                >首页</i
              >
            </el-menu-item>
            <el-menu-item index="2">
              <i
                class="iconfont iconcategory"
                :class="{ active: 2 === currentIndex }"
                >分类</i
              >
            </el-menu-item>
            <el-menu-item index="3">
              <i
                class="iconfont iconcc-tag-more"
                :class="{ active: 3 === currentIndex }"
                >标签</i
              >
            </el-menu-item>
            <el-menu-item index="4">
              <i
                class="iconfont iconvideo"
                :class="{ active: 4 === currentIndex }"
                >视频</i
              >
            </el-menu-item>
            <el-menu-item index="5">
              <i
                class="iconfont iconchart2"
                :class="{ active: 5 === currentIndex }"
                >图表</i
              >
            </el-menu-item>
            <el-menu-item index="6">
              <i
                class="iconfont iconguanyuwomen"
                :class="{ active: 6 === currentIndex }"
                >关于我</i
              >
            </el-menu-item>
          </el-menu>
        </template>

        <!--后台管理导航栏-->
        <template v-else>
          <el-menu
            :default-active="String.toString(getCurrentIndex2)"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect2"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <i
                class="iconfont iconicon_home"
                :class="{ active: 1 === getCurrentIndex2 }"
                >博客管理</i
              >
            </el-menu-item>
            <el-menu-item index="2">
              <i
                class="iconfont iconcategory"
                :class="{ active: 2 === getCurrentIndex2 }"
                >分类管理</i
              >
            </el-menu-item>
            <el-menu-item index="3">
              <i
                class="iconfont iconcc-tag-more"
                :class="{ active: 3 === getCurrentIndex2 }"
                >标签管理</i
              >
            </el-menu-item>
          </el-menu>
        </template>
      </el-col>

      <el-col :span="5">
        <!--前台搜索框-->
        <template v-if="this.$route.path.indexOf('/admin') === -1">
          <el-input
            placeholder="请输入内容"
            v-model="input"
            prefix-icon="el-icon-search"
            class="top_input"
          >
          </el-input>
        </template>

        <!--头像 -->
        <el-dropdown placement="top" @command="handleCommand">
          <span class="el-dropdown-link">
            <avatar :src="isLogin ? getCurrentUser.avatar : avatarPath" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>{{
              isLogin ? getCurrentUser.username : "访客"
            }}</el-dropdown-item>
            <div v-show="!isLogin">
              <el-dropdown-item command="toLogin">登录</el-dropdown-item>
              <el-dropdown-item command="toRegister">注册</el-dropdown-item>
            </div>

            <div v-show="isLogin">
              <el-dropdown-item command="toUserSpace"
                >个人中心</el-dropdown-item
              >
              <el-dropdown-item command="toLoginOut">退出登录</el-dropdown-item>
            </div>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Avatar from "vue-avatar";

export default {
  name: "TopBar",
  components: {
    Avatar
  },
  data() {
    return {
      currentIndex: this.$store.state.currentIndex1,
      input: "",
      avatarPath:
        "http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg"
    };
  },
  computed: {
    getCurrentIndex1() {
      return this.$store.state.currentIndex1;
    },
    getCurrentIndex2() {
      return this.$store.state.currentIndex2;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    },
    getCurrentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    changeCurrentIndex1(key) {
      this.$store.commit("changeCurrentIndex1", key);
    },
    changeCurrentIndex2(key) {
      this.$store.commit("changeCurrentIndex2", key);
    },
    handleSelect1(key) {
      key = parseInt(key);
      switch (key) {
        case 1:
          this.$router.push("/home").catch(err => err);
          this.currentIndex = key;
          this.changeCurrentIndex1(key);
          break;
        case 2:
          this.$router.push("/types").catch(err => err);
          this.currentIndex = key;
          this.changeCurrentIndex1(key);
          break;
        case 3:
          this.$router.push("/tags").catch(err => err);
          this.currentIndex = key;
          this.changeCurrentIndex1(key);
          break;
        case 4:
          this.$router.push("/video").catch(err => err);
          this.currentIndex = key;
          this.changeCurrentIndex1(key);
          break;
        case 5:
          this.$router.push("/chart").catch(err => err);
          this.currentIndex = key;
          this.changeCurrentIndex1(key);
          break;
        case 6:
          this.$router.push("/about").catch(err => err);
          this.currentIndex = key;
          this.changeCurrentIndex1(key);
          break;
      }
    },
    handleSelect2(key) {
      key = parseInt(key);
      switch (key) {
        case 1:
          this.$router.push("/admin/blogs").catch(err => err);
          this.changeCurrentIndex2(key);
          break;
        case 2:
          this.$router.push("/admin/types").catch(err => err);
          this.changeCurrentIndex2(key);
          break;
        case 3:
          this.$router.push("/admin/tags").catch(err => err);
          this.changeCurrentIndex2(key);
          break;
      }
    },
    handleCommand(command) {
      if (command === "toLogin") {
        this.$router.push("/login").catch(err => err);
      } else if (command === "toRegister") {
        this.$router.push("/register").catch(err => err);
      } else if (command === "toLoginOut") {
        this.$store.dispatch("setUser", null);
      } else if (command === "toUserSpace") {
        console.log("toUserSpace");
      }
    }
  }
};
</script>

<style scoped>
#top-bar {
  background-color: #545c64;
  height: 60px;
}

.img {
  padding-left: 280px;
}

.top_input {
  width: 300px;
  margin-top: 11px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-dropdown {
  float: right;
  margin-top: 5px;
  margin-right: -50px;
}

.active {
  color: rgb(255, 208, 75) !important;
}
</style>
