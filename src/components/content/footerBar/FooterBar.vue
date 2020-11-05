<template>
  <el-row>
    <el-col :span="8">
      <div class="text-style-contact">
        QQ: 763971579<br />
        Bilibili: 开发者-沈奕<br />
        Email: 763971579@qq.com<br />
      </div>
    </el-col>
    <el-col :span="8">
      <el-image
        :src="require('@/assets/img/logo.png')"
        fit="fill"
        class="img"
      />
    </el-col>
    <el-col :span="8">
      <div class="text-style">
        道可道，非常道；<br />
        名可名，非常名。<br />
        无名天地之始，有名万物之母。<br />
        故常无欲，以观其妙；<br />
        常有欲，以观其徼。<br />
        此两者同出而异名，同谓之玄，<br />
        玄之又玄，众妙之门。<br />
      </div>
    </el-col>
    <div class="text-style-copyright">
      © 2020 Copyright 2020, xinghai. All Rights Reserved.
      <a
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13010802001192"
        target="_blank"
      >
        <img src="@/assets/img/beian.png" style="margin-bottom:-3px;"/>冀公网安备 13010802001192号
      </a>
    </div>
  </el-row>
</template>

<script>
export default {
  name: "FooterBar"
};
</script>

<style scoped>
.el-row {
  background-color: #545c64;
  height: 300px;
  margin-top: 100px;
}

.text-style {
  font-family: "华文行楷", "楷体_GB2312";
  font-size: 30px;
  text-align: center;
  vertical-align: center;
  color: #fff;
  margin-top: 35px;
}

.el-row {
  text-align: center;
}

.el-image {
  margin-top: 100px;
}

.text-style-copyright {
  color: #fff;
  opacity: 0.5;
  position: absolute;
  bottom: 6px;
  left: 0;
  right: 0;
  margin: auto;
}

.text-style-copyright a {
  color: #fff;
}

.text-style-contact {
  color: #fff;
  font-family: "consolas", "楷体_GB2312";
  font-size: 24px;
  margin-top: 100px;
}
</style>
