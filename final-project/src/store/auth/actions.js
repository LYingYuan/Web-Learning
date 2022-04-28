// 定时器容器，时间到了删除本地token
let timer;

export default {
  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    console.log(payload);
    // 登录的API接口
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAj6hZnAALZ6igWTIpXP3hv4C6Y8tnIbUo";

    if (mode === "signup") {
      // 注册的API接口
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAj6hZnAALZ6igWTIpXP3hv4C6Y8tnIbUo";
    }

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });

    // josn()是一个异步函数，且fetch得到的数据必须经过它处理才可使用
    const response_data = await response.json();

    // 错误处理
    if (!response.ok) {
      const error = new Error(
        response_data.message ||
          "Failed to authenticate. Check your login data."
      );
      throw error;
    }
    console.log("成功");
    // 设置token过期时间
    const expires_in = +response_data.expiresIn * 1000; // 获取服务器上生成token的有效时间
    const expiration_date = new Date().getTime() + expires_in; // 计算token失效的时间戳

    localStorage.setItem("token", response_data.idToken);
    localStorage.setItem("userId", response_data.localId);
    localStorage.setItem("tokenExpiration", expiration_date);

    timer = timer = setTimeout(function () {
      // token过期自动退出登录
      context.dispatch("autoLogout");
    }, expires_in);
    context.commit("setUser", {
      token: response_data.idToken,
      userId: response_data.localId,
    });
  },
  // 获取localStorage的token数据完成自动登录
  autoLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const expiresIn = +tokenExpiration - new Date().getTime();

    // token过期的情况
    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
