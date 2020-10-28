<template>
  <div class="content-card">
    <card cardName="热门">
      <el-row
        v-for="(item, index) in getPopularBlog"
        :key="index"
        justify="center"
        align="middle"
        class=""
      >
        <el-col>
          <span>{{ item.title }}</span>
        </el-col>
        <!--
        <el-col :span="12">
          <div class="date-view">
            <i class="el-icon-view">{{ item.viewNum }}</i>
            <i class="el-icon-star-off">{{ item.favoriteNum }}</i>
            <i class="el-icon-chat-dot-round">{{ item.commentNum }}</i>
          </div>
        </el-col>
        -->
        <el-divider />
      </el-row>
    </card>
    <card cardName="标签">
      <tags-cloud :tag="getAllTagName" />
    </card>
    <card cardName="今日诗词">
      <div  class="poem">
        <h3>{{ poem.title }}</h3>
        <i style="font-size: 14px;">{{ poem.dynasty + " - " + poem.author }}</i>
        <div>
          <p v-for="(item,index) in poem.content" :key="index">
            {{item}}
          </p>
        </div>
      </div>
    </card>
    <el-image :src="require('@/assets/img/pic.jpg')" fit="fill" class="img" />
  </div>
</template>

<script>
import Card from "./Card";
import TagsCloud from "../tagscloud/TagsCloud";

import { getAllTag } from "network/tag";
import { getAllBlog } from "network/blog";
import { getAllType } from "network/type";

const jinrishici = require("jinrishici");

export default {
  name: "ContentCard",
  components: {
    Card,
    TagsCloud
  },
  created() {
    this.getAllBlog(), this.getAllTag(), this.getAllType();
  },
  computed: {
    getPopularBlog() {
      let tmpBlogList = [];
      for (let item of this.blog) {
        let tmpBlog = {
          title: item.title,
          // viewNum: item.viewNum,
          // favoriteNum: item.favoriteNum,
          // commentNum: item.commentNum,
          weight: 0
        };
        tmpBlog.weight = (
          (item.viewNum * 0.4 +
            item.favoriteNum * 0.3 +
            item.commentNum * 0.3) /
          (item.viewNum + item.favoriteNum + item.commentNum)
        ).toFixed(6);
        tmpBlogList.push(tmpBlog);

        tmpBlogList.sort((a, b) => {
          return b.weight - a.weight;
        });
      }

      return tmpBlogList.slice(0, 6);
    },
    getAllTagName() {
      let tagName = [];
      for (let item of this.tag) {
        tagName.push(item.name);
      }
      return tagName;
    },
    getAllTypeName() {
      let typeName = [];
      for (let item of this.type) {
        typeName.push(item.name);
      }
      return typeName;
    }
  },
  data() {
    return {
      blog: [],
      tag: [],
      type: [],
      poem: {
        content: "",
        title: "",
        author: "",
        dynasty: "",
        msg: ""
      }
    };
  },
  methods: {
    getAllBlog() {
      getAllBlog().then(res => {
        this.blog = res;
      });
    },
    getAllTag() {
      getAllTag().then(res => {
        this.tag = res;
      });
    },
    getAllType() {
      getAllType().then(res => {
        this.type = res;
      });
    },
    loadSentence() {
      jinrishici.load(
        result => {
          this.poem.content = result.data.origin.content;
          this.poem.title = result.data.origin.title;
          this.poem.author = result.data.origin.author;
          this.poem.dynasty = result.data.origin.dynasty;
          this.poem.msg = "加载成功...";
        },
        err => {
          console.log(err);
          this.poem.msg = "加载失败...";
        }
      );
    }
  },
  mounted() {
    this.loadSentence();
  }
};
</script>

<style scoped>
.poem {
  text-align: center;
  vertical-align: middle;
  font-size: 16px;
  line-height:30px;
  height: 300px;
}
.date-view {
  display: inline-block;
}

.el-row {
  text-align: center;
}

.name {
  margin-left: -30px;
}

.el-row {
  margin-bottom: 20px;
}

.content-card {
  margin-left: 10px;
}

.img {
  width: 348px;
  border-radius: 5px;
}
</style>
