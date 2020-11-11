<template>
  <div>
    <el-card class="box-card">
      <el-input placeholder="标题" v-model="title" clearable> </el-input>

      <el-select v-model="type" filterable placeholder="分类">
        <el-option
          v-for="item in types"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>

      <el-select v-model="tag" multiple placeholder="标签">
        <el-option
          v-for="item in tags"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>

      <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
    </el-card>

    <el-table
      :data="tableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
      :stripe="true"
      :highlight-current-row="true"
    >
      <el-table-column prop="id" label="ID" width="80">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="300"> </el-table-column>
      <el-table-column prop="typeName" label="类型" width="120">
      </el-table-column>
      <el-table-column prop="published" label="状态" width="120">
        <template slot-scope="scope">
          {{ scope.row.published == 1 ? "发布" : "保存" }}
        </template>
      </el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import { getAllBlog, deleteBlogById } from "network/blog";

export default {
  name: "BlogsEdit",
  data() {
    return {
      tableData: [],
      title: "",
      type: "",
      tag: ""
    };
  },
  props: {
    types: Array,
    tags: Array
  },
  methods: {
    handleEdit(index, row) {
      let form = {};
      form.title = row.title;
      form.content = row.content;
      form.description = row.description;
      form.first_picture = row.firstPicture;

      this.$emit("changeForm", form);
      this.$emit("changeActiveName", "first");
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该博客, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteBlogById(row.id).then(res => {
            console.log(res);
            this.tableData.splice(index, 1);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getAllBlog() {
      getAllBlog().then(res => {
        this.tableData = res;
      });
    }
  },
  updated() {
    this.getAllBlog();
  }
};
</script>

<style scoped>
.box-card {
  margin: 0 auto;
  width: 1000px;
  background-color: #f2f6fc;
}

.el-input {
  width: 370px;
  margin-right: 20px;
}

.el-select {
  display: inline-block;
  margin-right: 20px;
}

.el-table {
  width: 1000px;
  margin: 50px auto;
}
</style>
