<!--这是登录组件-->
<template>
  <div id="login">
    <div class="login-main">
      <div class="back iconfont icon-arrow-left" @click="backRoute"></div>
      <div class="title">密码登录</div>
      <div class="phoneTxt">手机号</div>
      <form action>
        <div class="tel-main">
          <div class="telPlaceCN">+86</div>
          <input type="text" autocomplete="off" class="telInput" name="utel" v-model="utel" />
        </div>
        <div class="pwdTxt">
          <div class="Txt">密码</div>
          <div class="showPwd">显示</div>
        </div>
        <div class="pwd-main">
          <input
            type="password"
            class="pwdInput"
            name="upwd"
            autocomplete="new-password"
            v-model="upwd"
          />
        </div>
        <div class="loginBtn-main">
          <div class="toggleLogin">去注册</div>
          <div class="loginBtn iconfont icon-jiantou" @click="login"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      utel: "",
      upwd: ""
    };
  },
  mounted() {
  },
  props:["routeFrom"],
  methods: {
    //登录的函数,绑给登录按钮.
    login() {
      if (!this.utel || !this.upwd || this.utel.length != 11) {
        MessageBox.alert("请输入完整的账号密码");
        return;
      }
      let data = {
        utel: this.utel,
        upwd: this.upwd
      };
      this.$apis.login(data).then(res => {
        if (res.data.msg == "登录成功") {
          MessageBox.alert("登录成功").then(() => {
            this.$store.state.islogin = true;
            window.sessionStorage.setItem("islogin", true);
          });
        } else {
          MessageBox({
            message: "登录失败",
            showConfirmButton: true
          });
        }
      });
    },
    //点击返回按钮返回之前的路由
    backRoute() {
        this.$router.push(this.routeFrom)
    }
  },
};
</script>

<style lang="scss" scoped>
#login {
  position: relative;
  width: r(375);
  height: r(667);
  margin: 0 auto;
}
.login-main {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: r(16);
  color: #fff;
  background-color: rgba(54, 209, 220, 1);
  .back {
    height: r(40);
    width: 100%;
    padding: r(4) 0;
    font-size: r(18);
  }
  .title {
    font-weight: 500;
    font-size: r(30);
    padding: 0 r(14);
  }
  .phoneTxt {
    font-size: r(12);
    padding: r(6) r(14);
  }
  .tel-main {
    height: r(36);
    width: r(320);
    margin: 0 auto;
    padding: r(4) 0;
    border-bottom: 1px solid #fff;
    display: flex;
    .telPlaceCN {
      font-size: r(16);
      height: r(26);
      line-height: r(18);
      padding: r(4) r(10);
      background-color: #fff;
      color: rgb(89, 147, 151);
      text-align: center;
      border-radius: 3px;
      margin-right: r(10);
    }
    .telInput {
      font-size: r(16);
      height: r(26);
      outline: none;
      border: none;
      color: #fff;
      background-color: transparent;
      flex: 1;
    }
  }
  .pwdTxt {
    font-size: r(14);
    height: r(60);
    padding: r(20) r(14);
    .Txt {
      float: left;
    }
    .showPwd {
      float: right;
    }
  }
  .pwd-main {
    height: r(36);
    width: r(320);
    margin: 0 auto;
    padding: r(4) 0;
    border-bottom: 1px solid #fff;
    .pwdInput {
      font-size: r(16);
      float: left;
      height: r(26);
      outline: none;
      border: none;
      color: #fff;
      background-color: rgba(54, 209, 220, 1);
      width: 100%;
    }
  }
  .loginBtn-main {
    height: r(70);
    padding: r(10) r(16);
    .toggleLogin {
      float: left;
      border: 1px solid #fff;
      border-radius: 20px;
      padding: r(5) r(20);
      font-size: r(14);
      margin-top: r(10);
    }
    .loginBtn {
      font-size: r(24);
      float: right;
      height: r(50);
      line-height: r(50);
      text-align: center;
      color: rgb(97, 175, 180);
      width: r(50);
      border-radius: 50%;
      background-color: rgba(228, 228, 228, 0.4);
    }
  }
}
</style>