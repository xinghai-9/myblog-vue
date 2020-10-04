<template>
  <el-card class="box-card">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input
          placeholder="请输入文章标题"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="分类" style="display: inline-block;">
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签" style="display: inline-block;">
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

      </el-form-item>
      <el-form-item  label="首图">
        <el-input
          placeholder="首图引用地址"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="博客描述">
        <el-input type="textarea" v-model="form.desc" placeholder="简要概括内容"/>
      </el-form-item>
      <el-form-item>
        <el-button type="warning">取消<i class="el-icon-circle-close el-icon--right"/></el-button>
        <el-button type="success">保存<i class="el-icon-folder-add el-icon--right"/></el-button>
        <el-button type="primary" @click="onSubmit">发布<i class="el-icon-upload el-icon--right"/></el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  export default {
    name: "BlogsInfo",
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  .box-card {
    width: 1000px;
    margin-left: 50%;
    transform: translateX(-500px);
    margin-top: 50px;
  }

</style>
