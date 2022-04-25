<template>
  <div class="container">
    <div class="body">
      <base-link class="left" to="#"></base-link>
      <div class="right">
        <div class="content">
          <div class="login">
            <div class="switch-out"></div>
            <div class="pass">
              <h3>
                <a href="#">密码登录</a>
              </h3>
              <!-- TODO:表单 -->
              <form action="">
                <div class="input user">
                  <label for="email">邮箱</label>
                  <input type="email" name="" id="email" />
                </div>
                <div class="input"></div>
              </form>
            </div>
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
  box-sizing: border-box;
}

.login {
  padding: 0 40px 0 40px;
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

.input {
  height: 52px;
  background: #f9f9f9;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
}

.user {
  margin-top: 38px;
}

label {
  font-family: MicrosoftYaHei;
  font-size: 15px;
  color: #828282;
  transition: all 0.1s linear;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
}

input {
  display: block;
  font-family: MicrosoftYaHei;
  font-size: 15px;
  color: #222;
  letter-spacing: 0;
  line-height: 15px;
  width: 100%;
  background: none;
  flex: 1;
  height: 32px;
  padding: 20px 0 0 0;
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
</style>
