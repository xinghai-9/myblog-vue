<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{cardName}}</span>
      <el-button style="float: right; padding: 3px 0" type="text" :click="buttonClick()">
        more >>
      </el-button>
    </div>
    <slot/>
  </el-card>
</template>

<script>
  export default {
    name: "Card",
    props: {
      cardName: {
        type: String
      }
    },
    data(){
      return {

      }
    },
    methods: {
      buttonClick(){
        // if("分类" === this.cardName){
        //   this.$router.push('/types').catch((err) => err);
        // }else if("标签" === this.cardName){
        //   this.$router.push('/tags').catch((err) => err);
        // }else if("最新" === this.cardName){
        //   this.$router.push('/archives').catch((err) => err);
        // }
      }
    }
  }
</script>

<style scoped>

  .box-card {
    width: 350px;
    height: 400px;
    margin-bottom: 50px;
  }

</style>
