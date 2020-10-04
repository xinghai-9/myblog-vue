<template>
  <div class="about">
    <el-card class="carousel">
      <el-carousel height="480px">
        <el-carousel-item v-for="image in images" :key="image.id">
          <el-image
            style="width: 100%; height: 100%"
            :src="image.imagePath"
            :fit="scale-down"/>
        </el-carousel-item>
      </el-carousel>
    </el-card>


    <el-card class="box-card">
      <aplayer :audio="audio" :lrcType="3" ref="aplayer"/>
      <div>
        <p class="typing text">
          偶尔热血，偶尔颓废。喜欢倒腾代码，也喜欢思考人生。
        </p>
      </div>

    </el-card>

    <div class="clear-fix"/>
  </div>


</template>

<script>

  export default {
    name: "About",
    components: {
    },
    data() {
      return {
        images: [
          {id: 0, imagePath: require("@/assets/img/6.jpg")},
          {id: 1, imagePath: require("@/assets/img/7.jpg")},
          {id: 2, imagePath: require("@/assets/img/8.jpg")},
          {id: 3, imagePath: require("@/assets/img/9.jpg")},
          {id: 4, imagePath: require("@/assets/img/10.jpg")},
        ],
        audio: [
          {
            name: '等你下课',
            artist: '周杰伦、杨瑞代',
            url: 'https://sharefs.yun.kugou.com/202009292311/863e8dacb4d0883ae1a31e44de686e77/G234/M08/16/0B/Kg4DAF7aKKSANb8TAEHyWBGTrGc572.mp3',
            cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300',
          },
          {
            name: '莫问归期',
            artist: '蒋雪儿',
            url: 'https://sharefs.yun.kugou.com/202009292317/70640cd9de165a9c985eece3af2ea20d/G165/M08/0F/03/hZQEAF1cr5qAGOY4ADWWMWd56LA023.mp3',
            cover: 'http://m.imeitou.com/uploads/allimg/2020090112/wbp0cmekiqq-lp.jpg?param=300y300',
          },
          {
            name: '辞·九门回忆',
            artist: 'M.I.A.',
            url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_144387015&response=res&type=convert_url&',
            cover: 'http://m.imeitou.com/uploads/allimg/2020090113/hwgqvbmzknd-lp.jpg?param=300y300',
          },
          {
            name: '赤怜',
            artist: '沐歆儿',
            url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_79163421&response=res&type=convert_url&',
            cover: 'http://m.imeitou.com/uploads/allimg/2020090112/xcbghafi3fr-lp.jpg?param=300y300',
          },
          {
            name: '黎明前的黑暗',
            artist: '孟颖',
            url: 'https://sharefs.yun.kugou.com/202009292330/353a6ed48b2d946d6579a4ea4f729b4f/G158/M08/08/19/3g0DAFzSxK6AQbNqACCDpnx8Lrs429.mp3',
            cover: 'http://m.imeitou.com/uploads/allimg/2020090111/sqaz2k0ouol-lp.jpg?param=300y300',
          },
        ]


      }
    }
  }
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

  .typing{
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    width:400px;
    white-space:nowrap;
    overflow:hidden;
    -webkit-animation: type 6s steps(50, end);
    animation: type 6s steps(50, end);
  }


  @-webkit-keyframes type{
    from { width: 0;}
  }

  @keyframes type{
    from { width: 0;}
  }

  .text{
    font-family: verdana, sans-serif;
    color: #FF8103;
    font-size: 16px;
    font-weight: bold;

  }

</style>
