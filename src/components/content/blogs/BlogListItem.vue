<template>
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <router-link :to="'/detail/'+item.id">
      <el-row :gutter="20">
        <el-col :span="8">
          <img :src="item.first_picture" class="image">
        </el-col>
        <el-col :span="12">
          <h3 class="title">
            {{item.title}}
            <slot>
              <el-tag style="margin-left: 380px;">{{item.type}}</el-tag>
            </slot>
          </h3>

          <div class="Summary">
            {{item.description}}
          </div>
          <div class="date-view">
            <i class="el-icon-date">{{item.create_time}}</i>
            <i class="el-icon-view">{{item.views}}</i>
          </div>
        </el-col>
      </el-row>
    </router-link>

  </el-card>

</template>

<script>
  export default {
    name: "BlogListItem",
    methods: {

    },
    props: {
      item: {
        type: Object,
        default: ''
      }
    }
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
    height: 180px;
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
    margin-top: 75px;
    margin-left: -40px;
  }

  .date-view i{
    margin-right: 30px;
    color: gray;
  }
</style>
