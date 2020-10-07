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
      <div>
        <p class="text">
          我的昵称是<span style="color:red;">挨踢攻城狮</span>，<br />
          显而易见，由于鄙人经常写出常人无法理解的bug而挨踢。<br />
          故吾常每日三省吾身——看书没？敲代码没？写笔记没？
        </p>
        <img
          style="width:420px;height:250px;margin-left:18px;
          "
          src="https://www.tianqiweiqi.com/wp-content/uploads/2019/04/%E5%8E%8B%E5%8A%9B%E4%B9%9F%E6%B2%A1%E9%82%A3%E4%B9%88%E5%A4%A7.jpg"
        />
      </div>
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
            "http://m8.music.126.net/20201006110922/901dee449dc74259d2e0c71f2c7e6f3b/ymusic/5409/5158/025b/cc5945120af2295af4f051f44fc9981d.mp3",
          cover:
            "https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300"
        },
        {
          name: "莫问归期",
          artist: "蒋雪儿",
          url:
            "https://sharefs.yun.kugou.com/202010061034/cb0b3c1d3cf2b13b2897b1cdd65180e0/G165/M08/0F/03/hZQEAF1cr5qAGOY4ADWWMWd56LA023.mp3",
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
  /*background: url("~assets/img/xiamu.png");*/
  /*background-size: 100% 100%;*/
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
