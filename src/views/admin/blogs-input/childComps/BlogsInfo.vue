<template>
  <div>
    <editor class="editor" v-model="content" />
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input placeholder="请输入文章标题" v-model="form.title" clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="分类" style="display: inline-block;">
          <el-select v-model="form.type" filterable placeholder="请选择">
            <el-option label="1" value="Java"></el-option>
            <el-option label="2" value="Vue"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标签" style="display: inline-block;">
          <el-select v-model="form.tag" multiple placeholder="请选择">
            <el-option
              v-for="item in tags"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="首图">
          <el-input
            placeholder="首图引用地址"
            v-model="form.first_picture"
            clearable
          >
          </el-input>
        </el-form-item>
        <el-form-item label="博客描述">
          <el-input
            type="textarea"
            v-model="form.description"
            placeholder="简要概括内容"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="warning"
            >取消<i class="el-icon-circle-close el-icon--right"
          /></el-button>
          <el-button type="success"
            >保存<i class="el-icon-folder-add el-icon--right" @click="onSaved"
          /></el-button>
          <el-button type="primary" @click="onPublished"
            >发布<i class="el-icon-upload el-icon--right"
          /></el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Editor from "components/common/editor/Editor";
import { getAllTag } from "network/tag";

export default {
  name: "BlogsInfo",
  components: {
    Editor
  },
  data() {
    return {
      content: "",
      form: {
        title: "",
        type: "",
        tag: "",
        first_picture: "",
        description: "",
        published: 0
      },
      tags: [
        {
          value: "1",
          label: "mysql"
        },
        {
          value: "2",
          label: "linux"
        },
        {
          value: "3",
          label: "docker"
        }
      ]
    };
  },
  methods: {
    onSaved(){
      console.log(this.content);
    },
    onPublished() {
      console.log(this.content);
    },
    getAllTag() {
      getAllTag().then(res => {
        console.log(res);
      });
    }
  },
  created() {
    this.getAllTag();
  }
};
</script>

<style scoped>
.box-card {
  width: 1000px;
  margin-left: 50%;
  transform: translateX(-500px);
  margin-top: 50px;
}

.editor {
  /*margin-top: 50px !important;*/
  height: 800px !important;
}
</style>
