<template>
  <div>
    <el-card class="box-card">
      <template v-if="isTypeEdit()">
        <el-input placeholder="分类名" v-model="type_name" clearable>
        </el-input>
      </template>
      <template v-else>
        <el-input placeholder="标签名" v-model="tag_name" clearable> </el-input>
      </template>
      <el-button
        type="primary"
        icon="el-icon-circle-plus-outline"
        @click="add()"
        plain
        >添加</el-button
      >
    </el-card>

    <el-table
      :data="tableData"
      :default-sort="{ prop: 'id', order: 'descending' }"
      :stripe="true"
      :highlight-current-row="true"
    >
      <el-table-column prop="id" label="ID" width="200">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="类型" width="400"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="
              dialogFormVisible = true;
              form = scope.row;
            "
            >编辑
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input
            v-model="form.id"
            autocomplete="off"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEdit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { setTypeData, updateType } from "network/type";
import { setTagData, updateTag } from "network/tag";

export default {
  name: "BaseEdit",
  data() {
    return {
      type_name: "",
      tag_name: "",
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "120px"
    };
  },
  props: {
    tableData: Array
  },
  methods: {
    isTypeEdit() {
      return this.$route.path.indexOf("/admin/types") !== -1 ? true : false;
    },
    add() {
      if (this.isTypeEdit()) {
        setTypeData(this.type_name).then(res => {
          this.$message({
            message: "分类添加成功！",
            type: "success"
          });
          this.type_name = "";
          this.$emit("updateTypeData");
        });
      } else {
        setTagData(this.tag_name).then(res => {
          this.$message({
            message: "标签添加成功！",
            type: "success"
          });
          this.tag_name = "";
          this.$emit("updateTagData");
        });
      }
    },
    handleEdit() {
      this.dialogFormVisible = false;
      if (this.isTypeEdit()) {
        updateType(this.form).then(res => {
          this.$message({
            message: "分类修改成功！",
            type: "success"
          });
          this.form = {};
          this.$emit("updateTypeData");
        });
      } else {
        updateTag(this.form).then(res => {
          this.$message({
            message: "标签修改成功！",
            type: "success"
          });
          this.form = {};
          this.$emit("updateTagData");
        });
      }
    },
    handleDelete(row) {
      if (this.isTypeEdit()) {
        this.$confirm(
          "此操作将永久删除该分类, 是否继续?",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        ).then(() => {
            this.$emit("deleteTypeData", row);
          }).catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }else{
        this.$confirm(
          "此操作将永久删除该标签, 是否继续?",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        ).then(() => {
            this.$emit("deleteTagData", row);
          }).catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    }
  }
};
</script>

<style scoped>
.box-card {
  margin: 0 auto;
  width: 600px;
  background-color: #f2f6fc;
  margin-top: 50px;
}

.el-input {
  width: 370px;
  margin-right: 50px;
  margin-left: 20px;
}

.el-table {
  width: 1000px;
  margin: 50px auto;
}
</style>
