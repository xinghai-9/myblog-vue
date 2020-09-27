<template>
  <div id="home">
    <top-bar/>
    <main-content/>
    <footer-bar/>
  </div>

</template>

<script>
  import TopBar from "components/content/topBar/TopBar";
  import FooterBar from "components/content/footerBar/FooterBar";

  import MainContent from "./childComps/MainContent";



  export default {
    name: "Home",
    components: {
      TopBar,
      FooterBar,
      MainContent
    }
  }
</script>

<style scoped>
#home{
  width: 100%;
}
  .top-bar,.main-content,.footer-bar{
    width: 100% !important;
    padding: 0;
  }

</style>
