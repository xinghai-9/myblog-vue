<template>
  <el-card class="login">
    <div class="login-wrap" v-show="this.$route.path.indexOf('/login') !== -1">
      <h3>登录</h3>
      <el-input placeholder="请输入用户名" v-model="username" />
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

    <div
      class="register-wrap"
      v-show="this.$route.path.indexOf('/register') !== -1"
    >
      <h3>注册</h3>
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
      <el-button type="primary" @click="register">注册</el-button>
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
import { login, register, User } from "network/login";

export default {
  data() {
    return {
      username: "",
      password: "",
      avatar: "https://source.unsplash.com/random/200x200",
      newUsername: "",
      newPassword: "",
      new2Password: ""
    };
  },
  methods: {
    clearInput() {
      this.username = "";
      this.password = "";
      this.newUsername = "";
      this.newPassword = "";
      this.new2Password = "";
    },
    showLogin() {
      this.$router.push("/login").catch(err => err);
    },
    showRegister() {
      this.$router.push("/register").catch(err => err);
    },
    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.username, password: this.password };
        /*接口请求*/
        login(data).then(res => {
          this.$message({
            message: res.username + "，登录成功！",
            type: "success"
          });

          let user = new User(res);

          //将用户名放入sessionStorage
          sessionStorage.setItem("user", JSON.stringify(user));
          //将用户名放入vuex
          this.$store.dispatch("setUser", user);
          this.$router.push("/home");
          this.clearInput();
        });
      }
    },
    register() {
      if (this.newUsername == "" || this.newPassword == "") {
        alert("请输入用户名或密码");
      }else if(this.new2Password == ""){
        alert("请再次输入您的密码");
      }else if(this.newPassword != this.new2Password){
        alert("两次密码不一致");
      }else {
        let data = { username: this.newUsername, password: this.new2Password, avatar: this.avatar };
        /*接口请求*/
        register(data).then(res => {
          this.$message({
            message: "注册成功！请登录",
            type: "success"
          });

          this.$router.push("/login");
          this.clearInput();
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
