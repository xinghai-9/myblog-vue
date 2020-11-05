<template>
  <div>
    <mavon-editor
      style="height: 800px;width: 80%;margin: auto;"
      v-model="form.content"
      ref="md"
      :toolbars="toolbarsValue"
      @save="saveMavon"
    />

    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input placeholder="请输入文章标题" v-model="form.title" clearable>
          </el-input>
        </el-form-item>

        <el-form-item label="分类" style="display: inline-block;">
          <el-select v-model="form.type_id" filterable placeholder="请选择">
            <el-option
              v-for="item in types"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="标签" style="display: inline-block;">
          <el-select v-model="form.tags_id" multiple placeholder="请选择">
            <el-option
              v-for="item in tags"
              :key="item.id"
              :label="item.name"
              :value="item.id"
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
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  name: "BlogsInfo",
  components: {
    mavonEditor
  },
  data() {
    return {
      form: {},
      toolbarsValue: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  props: {
    types: Array,
    tags: Array
  },
  methods: {
    onSaved() {
      this.form.published = 0;
      console.log(this.form);
    },
    onPublished() {
      this.form.published = 1;
      console.log(this.form);
    },
    saveMavon(value, render) {
      console.log("this is render" + render);
      console.log("this is value" + value);
    }
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
</style>
