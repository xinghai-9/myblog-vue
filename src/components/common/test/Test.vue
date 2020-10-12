<template>
  <el-card class="login">
    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
      <p v-show="showTishi">{{ tishi }}</p>
      <el-input placeholder="请输入用户名" v-model="username" />
      <el-input type="password" placeholder="请输入密码" v-model="password" />
      <el-button type="primary" @click="login">登录</el-button>
      <el-link
        type="info"
        style="margin-top:20px;display:block;"
        :underline="false"
        >没有账号？马上注册</el-link
      >
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showTishi">{{ tishi }}</p>

      <section>
        <img v-if="!progressFlag" class="head-img" :src="imageUrl" />
        <div v-show="progressFlag" class="head-img">
          <el-progress
            type="circle"
            :percentage="progressPercent"
          ></el-progress>
        </div>
        <el-upload
          class="img-btn"
          action="#"
          :show-file-list="false"
          :before-upload="beforeAvatarUpload"
          :http-request="uploadImg"
        >
          <el-button type="success" plain round size="mini"
            >更改头像</el-button
          ></el-upload
        >
      </section>

      <el-input placeholder="请输入用户名" v-model="newUsername" />
      <el-input
        type="password"
        placeholder="请输入密码"
        v-model="newPassword"
      />
      <el-button type="primary">注册</el-button>
      <el-link
        type="info"
        style="margin-top:20px;display:block;"
        :underline="false"
        >已有账号？马上登录</el-link
      >
    </div>
  </el-card>
</template>

<script>
import { setCookie, getCookie } from "assets/js/cookie";

export default {
  mounted() {
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if (getCookie("username")) {
      this.$router.push("/home");
    }
  },
  data() {
    return {
      showLogin: false,
      showRegister: true,
      showTishi: false,
      tishi: "",
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
      imageUrl: "",
      progressFlag: false
    };
  },
  methods: {
    uploadImg(f) {
      console.log(f);
      this.progressFlag = true;
      let formdata = new FormData();
      formdata.append("image", f.file);
      axios({
        url: baseURL + "/image",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: progressEvent => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          this.progressPercent =
            (progressEvent.loaded / progressEvent.total) * 100;
        }
      })
        .then(res => {
          this.imageUrl = res.data.data;
          if (this.progressPercent === 100) {
            this.progressFlag = false;
            this.progressPercent = 0;
          }
        })
        .then(error => {
          console.log(error);
        });
    },
    // 上传图片前的过滤
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.username, password: this.password };
        /*接口请求*/
        this.$http
          .post("http://localhost/vueapi/index.php/Home/user/login", data)
          .then(res => {
            console.log(res);
            /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
            if (res.data == -1) {
              this.tishi = "该用户不存在";
              this.showTishi = true;
            } else if (res.data == 0) {
              this.tishi = "密码输入错误";
              this.showTishi = true;
            } else if (res.data == "admin") {
              /*路由跳转this.$router.push*/
              this.$router.push("/main");
            } else {
              this.tishi = "登录成功";
              this.showTishi = true;
              setCookie("username", this.username, 1000 * 60);
              setTimeout(
                function() {
                  this.$router.push("/home");
                }.bind(this),
                1000
              );
            }
          });
      }
    }
  }
};
</script>

<style>
.el-input {
  width: 280px;
}

h3 {
  padding: 20px;
}

.login {
  width: 400px;
  height: 400px;
  margin: 100px auto;
}

.login-wrap {
  text-align: center;
  margin-top: 30px;
}

.register-wrap {
  text-align: center;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}
p {
  color: red;
}
button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}

.avatar-uploader .el-upload {
  border: 1px solid #d9d9d9;
  border-radius: 80px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>
