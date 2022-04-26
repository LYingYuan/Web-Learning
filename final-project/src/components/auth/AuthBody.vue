<template>
  <div class="container">
    <div class="body">
      <base-link class="left" to="#"></base-link>
      <div class="right">
        <div class="content">
          <!-- TODO:隐藏 -->
          <div class="login">
            <div class="switch-out"></div>
            <div class="pass">
              <h3>
                <a href="#">密码登录</a>
              </h3>
              <form @submit.prevent="?">
                <div class="user">
                  <auth-input
                    input_type="email"
                    input_id="email"
                    label_text="邮箱"
                  ></auth-input>
                </div>
                <div class="password">
                  <auth-input
                    input_type="password"
                    input_id="password"
                    label_text="密码"
                  ></auth-input>
                </div>
                <div class="agreement">
                  登录即同意
                  <base-link mode="black-all">用户协议、</base-link>
                  <base-link mode="black-all">隐私政策</base-link>
                </div>
                <button class="btn">登录</button>
              </form>
              <div class="other">
                <button class="to-sign">立即注册</button>
              </div>
            </div>
          </div>
          <div class="signup">
            <h2>
              <button class="to-login">
                <img src="../../assets/icon/返回.svg" alt="" />
              </button>
              <span>立即注册</span>
            </h2>
            <!-- TODO:prevent -->
            <form @submit.prevent="?">
              <div class="signup-user">
                <auth-input
                  input_type="email"
                  input_id="signup-email"
                  label_text="邮箱"
                ></auth-input>
              </div>
              <div class="signup-psw">
                <auth-input
                  input_type="password"
                  input_id="signup-password"
                  label_text="密码"
                ></auth-input>
              </div>
              <div class="agreement">
                登录即同意
                <base-link mode="black-all">用户协议、</base-link>
                <base-link mode="black-all">隐私政策</base-link>
              </div>
              <button class="btn">同意并注册</button>
            </form>
          </div>
        </div>
        <div class="third">
          <base-link>
            <img src="../../assets/pic/auth/third/wechat.png" alt="" />
          </base-link>
          <base-link>
            <img src="../../assets/pic/auth/third/alipay.png" alt="" />
          </base-link>
          <base-link>
            <img src="../../assets/pic/auth/third/qq.png" alt="" />
          </base-link>
          <base-link>
            <img src="../../assets/pic/auth/third/weibo.png" alt="" />
          </base-link>
          <base-link>
            <img src="../../assets/pic/auth/third/baidu.png" alt="" />
          </base-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLink from "../ui/BaseLink.vue";
import AuthInput from "./AuthInput.vue";

export default {
  components: {
    AuthInput,
    BaseLink,
  },
  data() {
    return {
      sign_page: false,
    };
  },
};
</script>
<style scoped>
.container {
  height: 590px;
  margin-top: 43px;
  background-image: url(../../assets/pic/auth/back.php);
  background-repeat: no-repeat;
  background-position: 50%;
}

.body {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.left {
  display: block;
  flex: 1;
  height: 100%;
  margin-right: 100px;
}

.right {
  width: 420px;
  height: 470px;
  background: #fff;
  box-shadow: 0 6px 20px 0 rgb(37 43 50 / 7%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.content {
  flex: 1;
}

.login {
  padding: 0 40px 0 40px;
  display: none;
}

.switch-out {
  position: relative;
  height: 40px;
  margin: 0 -40px;
}

.pass > h3 {
  font-size: inherit;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
}

h3 > a {
  font-family: MicrosoftYaHei-Bold;
  font-size: 18px;
  color: #333;
  font-weight: 700;
}

.user {
  margin-top: 38px;
}

.password {
  margin-top: 22px;
}

.agreement {
  margin-top: 30px;
  font-family: MicrosoftYaHei;
  font-size: 13px;
  color: #908e8f;
  text-align: center;
  line-height: 13px;
}

.btn {
  /* TODO:设置button不刷新prevent */
  display: block;
  text-align: center;
  background-image: linear-gradient(90deg, #fe5447, #f3344a);
  box-shadow: 0 3px 8px 1px rgb(235 28 49 / 22%);
  border-radius: 5px;
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-family: MicrosoftYaHeiSemibold;
  font-size: 18px;
  color: #fff;
  margin-top: 18px;
  cursor: pointer;
}

.other {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
}

.third {
  height: 64px;
  background: rgba(249, 248, 248, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.third a {
  margin: 0 16px;
}

.third img {
  width: 28px;
  height: 28px;
}

.to-sign {
  font-family: MicrosoftYaHei;
  font-size: 13px;
  color: #626262;
  letter-spacing: 0;
  line-height: 14px;
  cursor: pointer;
  background-color: white;
}

.to-login {
  cursor: pointer;
  background-color: white;
}

.to-login img {
  max-height: 17px;
}

.signup {
  padding: 40px 40px 0 40px;
}

h2 {
  font-family: MicrosoftYaHei-Bold;
  font-size: 18px;
  color: #333;
  letter-spacing: 0;
  line-height: 17px;
  font-weight: 700;
  display: flex;
  align-items: center;
}

h2 > span {
  flex: 1;
  text-align: center;
  padding-right: 18px;
}

.signup-user {
  margin-top: 38px;
}

.signup-psw {
  margin-top: 22px;
}
</style>
