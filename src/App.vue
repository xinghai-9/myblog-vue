<template>
  <div id="app">
    <!--顶部导航栏-->
    <top-bar/>
    <!--不同页面显示不同内容-->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!--底部栏-->
    <footer-bar/>
  </div>
</template>

<script>

  import TopBar from "components/content/topBar/TopBar";
  import FooterBar from "components/content/footerBar/FooterBar";

  export default {
    name: 'app',
    components: {
      TopBar,
      FooterBar,
    }
  }

</script>

<style>
  @import "assets/css/base.css";
</style>
