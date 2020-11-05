<template>
  <div class="about">
    <el-card class="carousel">
      <el-carousel height="480px">
        <el-carousel-item v-for="image in images" :key="image.id">
          <el-image style="width: 100%; height: 100%" :src="image.imagePath" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="box-card">
      <aplayer :audio="audio" :lrcType="3" ref="aplayer" />
      <br />
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item name="1">
          <template slot="title">
            <i class="el-icon-user-solid"></i>个人信息
          </template>
          <div>
            代号：沈奕、或无言、挨踢工程狮、星海
          </div>
          <div>
            专业：软件工程
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <i class="el-icon-s-tools"></i>技术栈
          </template>
          <div>
            前端：html/css/js、vue、element-ui
          </div>
          <div>
            后端：java、spring、springboot、mybatis
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <i class="el-icon-video-camera-solid"></i>兴趣爱好
          </template>
          <div>
            技术方面：linux、python、人工智能、黑客技术等
          </div>
          <div>
            娱乐方面：听歌、看电影
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <i class="el-icon-s-order"></i>近期目标
          </template>
          <ul>
            <li>1.看完《Java编程的逻辑》</li>
            <li>2.看完《labuladong的算法小抄》</li>
            <li>3.复习计算机网络</li>
            <li>4.复习操作系统</li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </el-card>

    <div class="clear-fix" />
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("changeCurrentIndex1", 5);
    });
  },
  data() {
    return {
      activeNames: ["1"],
      images: [
        { id: 0, imagePath: require("@/assets/img/6.jpg") },
        { id: 1, imagePath: require("@/assets/img/7.jpg") },
        { id: 2, imagePath: require("@/assets/img/8.jpg") },
        { id: 3, imagePath: require("@/assets/img/9.jpg") },
        { id: 4, imagePath: require("@/assets/img/10.jpg") }
      ],
      audio: [
        {
          name: "关山酒",
          artist: "等什么君",
          url:
            "https://sharefs.yun.kugou.com/202011031529/3babaebd0b6ed7ce6a6af9e77584bb08/G164/M02/19/09/hJQEAF1ou5aAVrTxADlcwhIMwfQ617.mp3",
          cover:
            "https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300"
        },
        {
          name: "莫问归期",
          artist: "蒋雪儿",
          url:
            "https://sharefs.yun.kugou.com/202011031529/4e2aeec9540bdb946a1aae855d124d0c/G165/M08/0F/03/hZQEAF1cr5qAGOY4ADWWMWd56LA023.mp3",
          cover:
            "http://m.imeitou.com/uploads/allimg/2020090112/wbp0cmekiqq-lp.jpg?param=300y300"
        },
        {
          name: "辞·九门回忆",
          artist: "M.I.A.",
          url:
            "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_144387015&response=res&type=convert_url&",
          cover:
            "http://m.imeitou.com/uploads/allimg/2020090113/hwgqvbmzknd-lp.jpg?param=300y300"
        },
        {
          name: "赤怜",
          artist: "沐歆儿",
          url:
            "http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_79163421&response=res&type=convert_url&",
          cover:
            "http://m.imeitou.com/uploads/allimg/2020090112/xcbghafi3fr-lp.jpg?param=300y300"
        },
        {
          name: "谪仙",
          artist: "伊格赛听,叶里",
          url: "https://www.joy127.com/url/9800.mp3",
          cover:
            "http://m.imeitou.com/uploads/allimg/2020090111/sqaz2k0ouol-lp.jpg?param=300y300"
        }
      ]
    };
  }
};
</script>

<style scoped>
.about {
  width: 2000px;
}

.carousel {
  width: 850px;
  float: left;
  position: relative;
  top: 100px;
  left: -400px;
}

.box-card {
  width: 500px;
  height: 640px;
  right: 280px;
  float: right;
  position: relative;
  top: 50px;
}

.el-carousel {
  border-radius: 5px;
}

@-webkit-keyframes type {
  from {
    width: 0;
  }
}

@keyframes type {
  from {
    width: 0;
  }
}

.text {
  font-family: verdana, sans-serif;
  color: #ff8103;
  font-size: 16px;
  font-weight: bold;
  margin: 20px;
}
</style>
