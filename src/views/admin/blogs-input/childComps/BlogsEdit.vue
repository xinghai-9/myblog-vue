<template>
  <div>
    <el-card class="box-card">
      <el-input
        placeholder="标题"
        v-model="input"
        clearable>
      </el-input>

      <el-select v-model="value" filterable placeholder="分类">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="value" filterable placeholder="标签">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
    </el-card>
    <el-table
      :data="tableData"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        prop="title"
        label="标题"
        width="300">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="更新时间"
        width="180"
      >
      </el-table-column>
      <el-table-column label="操作">
        <el-button
          size="mini">编辑
        </el-button>
        <el-button
          size="mini"
          type="danger">删除
        </el-button>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    name: "BlogsEdit",
    data(){
      return {
        tableData: [
          {
            title: '基于Springboot+Vue的响应式个人博客',
            type: 'springboot',
            status: '发布',
            date: '2020-8-21 21:06:23',
          },
          {
            title: '基于Springboot+Vue的响应式个人博客',
            type: 'springboot',
            status: '发布',
            date: '2020-8-21 21:06:23',
          },
          {
            title: '基于Springboot+Vue的响应式个人博客',
            type: 'springboot',
            status: '发布',
            date: '2020-8-21 21:06:23',
          },
          {
            title: '基于Springboot+Vue的响应式个人博客',
            type: 'springboot',
            status: '发布',
            date: '2020-8-21 21:06:23',
          },

        ]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped>
  .box-card {
    margin: 0 auto;
    width: 1000px;
    background-color: #F2F6FC;
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
