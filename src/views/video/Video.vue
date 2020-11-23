<template>
  <div>

    <el-link type="primary" class="text">{{title}}</el-link>
    <el-button @click="drawer = true" type="primary" class="btn">
      查看目录
    </el-button>

    <el-card class="box-card">
      <aliplayer
        :width="width"
        :height="height"
        :autoplay="true"
        ref="child"
      ></aliplayer>
    </el-card>

    <el-drawer :visible.sync="drawer" :with-header="false">
      <el-table
        :data="gridData"
        :highlight-current-row="true"
        @row-click="getDetails"
      >
        <el-table-column
          property="title"
          label="标题"
          width="200"
        ></el-table-column>
        <el-table-column
          property="description"
          label="描述"
          width="200"
        ></el-table-column>
        <el-table-column property="duration" label="时长" width="170">
          <template slot-scope="scope"
            >{{ (scope.row.duration / 60).toFixed(2) }}min</template
          >
        </el-table-column>
      </el-table>
    </el-drawer>
  </div>
</template>

<script type="text/ecmascript-6">
import Aliplayer from './childComps/Aliplayer'

import {getAllVideos} from "network/video";

export default {
  name: 'Video',
  data () {
    return {
      title: '',
      gridData: [],
      drawer: false,
      width: '1400px',
    }
  },
  computed: {
    // 高度自适应
    height () {
      let width = 1400;

      return `${width / 1.7777778}px`
    }
  },
  methods: {
    getAllVideos(){
      getAllVideos().then(res => {
        this.gridData = res;
      })
    },
    getDetails(row){
        this.$refs.child.loadByUrl(row.source, 0);
        this.title = row.title;
    }
  },
  components: {
    Aliplayer,
  },
  created() {
    this.getAllVideos()
  }
}
</script>

<style scoped>
.box-card {
  margin: 0 auto;
  margin-top: 20px;
  width: 1440px;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  margin-left: 300px;
}

.text {
  margin-left: -500px;
  font-size: 28px;
  font-family: "楷书";
}
</style>
