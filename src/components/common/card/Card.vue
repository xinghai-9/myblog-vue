<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{cardName}}</span>
      <el-button style="float: right; padding: 3px 0" type="text">more >></el-button>
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
