<template>
  <el-card class="login">
    <div class="login-wrap" v-show="this.$route.params.id == 1">
      <h3>登录</h3>
      <p v-show="showTishi">{{ tishi }}</p>
      <el-input placeholder="请输入用户名"  v-model="username" />
      <el-input type="password" placeholder="请输入密码" v-model="password" />
      <el-button type="primary" @click="login">登录</el-button>
      <el-link
        type="info"
        style="margin-top:20px;display:block;"
        :underline="false"
        @click="showRegister"
        >没有账号？马上注册</el-link
      >
    </div>

    <div class="register-wrap" v-show="this.$route.params.id == 2">
      <h3>注册</h3>
      <p v-show="showTishi">{{ tishi }}</p>

      <el-input placeholder="请输入用户名" v-model="newUsername" />
      <el-input
        type="password"
        placeholder="请输入密码"
        v-model="newPassword"
      />
      <el-input
        type="password"
        placeholder="再次输入密码"
        v-model="new2Password"
      />
      <el-button type="primary">注册</el-button>
      <el-link
        type="info"
        style="margin-top:20px;display:block;"
        :underline="false"
        @click="showLogin"
        >已有账号？马上登录</el-link
      >
    </div>
  </el-card>
</template>

<script>
import { login } from "network/login";

export default {
  data() {
    return {
      showTishi: false,
      tishi: "",
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
      new2Password: ""
    };
  },
  mounted() {
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    // if (getCookie("username")) {
    //   this.$router.push("/home");
    // }
  },
  methods: {
    showLogin(){
      this.$router.push("/test/1");
    },
    showRegister(){
      this.$router.push("/test/2");
    },
    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.username, password: this.password };
        /*接口请求*/
        login(data).then(res => {
          /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
          if (res.data.code == "-1") {
            this.tishi = "该用户不存在";
            this.showTishi = true;
          } else if (res.data.code == "0") {
            this.tishi = "密码输入错误";
            this.showTishi = true;
          } else if (res.data.code == "1") {
            /*路由跳转this.$router.push*/
            this.$router.push("/admin");
          } else {
            this.tishi = "登录成功";
            this.showTishi = true;
            
            //将用户名放入sessionStorage
            sessionStorage.setItem("userName",res.data.username);
            console.log(sessionStorage.getItem("userName"));
            //将用户名放入vuex
            this.$store.dispatch("setUserName",res.data.username);
            //打印login状态
            console.log(this.$store.state.isLogin);

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

<style scoped>
h3 {
  padding-bottom: 20px;
}

.login {
  width: 400px;
  margin: 100px auto;
}

.login-wrap {
  text-align: center;
  margin: auto 0;
}

.register-wrap {
  text-align: center;
  margin: auto 0;
}
.el-input {
  width: 280px !important;
  margin-bottom: 10px;
}
p {
  color: red;
}

button {
  width: 280px !important;
}
</style>
