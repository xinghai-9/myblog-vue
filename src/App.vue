<template>
  <div id="app">
    <!--顶部导航栏-->
    <top-bar />
    <!--不同页面显示不同内容-->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <!--底部栏-->
    <footer-bar />
  </div>
</template>

<script>
import TopBar from "components/content/topBar/TopBar";
import FooterBar from "components/content/footerBar/FooterBar";

export default {
  name: "app",
  components: {
    TopBar,
    FooterBar
  },
  created() {
    //在页面加载时读取localStorage里的状态信息
    localStorage.getItem("userMsg") &&
      this.$store.replaceState(
        Object.assign(
          this.$store.state,
          JSON.parse(localStorage.getItem("userMsg"))
        )
      );

    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("userMsg", JSON.stringify(this.$store.state));
    });

    if (sessionStorage.getItem("user") != "null") {
      this.$store.dispatch(
        "setUser",
        JSON.parse(sessionStorage.getItem("user"))
      );
    } else {
      this.$store.dispatch("setUser", null);
    }
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
