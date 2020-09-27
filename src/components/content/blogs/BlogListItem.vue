<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row :gutter="20">
      <el-col :span="8">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      </el-col>
      <el-col :span="12">
        <h3 class="title">
          基于SpringBoot+Vue的响应式个人博客
          <el-tag style="margin-left: 150px;">项目</el-tag>
        </h3>
        <div class="Summary">
          善于思考者有善于思考者的释然方式，不善思考者有不善思考者的释然办法，因为答案没有固定的模式，
          只要能放下心中的那个包袱，只要能做到从容、坦然。人生苦苦追求的，其实就是这么一个过程，只要做到了，
          生命终结的时候无论长短，觉得一切释然足矣--不枉此生！
        </div>
        <div class="date-view">
          <i class="el-icon-date">2020/9/27</i>
          <i class="el-icon-view">2354</i>
        </div>
      </el-col>
    </el-row>
  </el-card>

</template>

<script>
  export default {
    name: "BlogListItem"
  }
</script>

<style scoped>
  .el-card{
    width: 750px;
    margin: 0 auto;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 180px;
    display: block;
    padding: 10px;
    border-radius: 20px;
  }

  .title{
    margin-top: 15px;
    margin-left: -40px;
    width: 600px;
  }

  .Summary{
    color: gray;
    line-height: 18px;
    width: 480px;
    margin-top: 15px;
    margin-left: -40px;
  }

  .date-view{
    margin-top: 15px;
    margin-left: -40px;
  }

  .date-view i{
    margin-right: 30px;
    color: gray;
  }
</style>
