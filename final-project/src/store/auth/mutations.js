export default {
  setUser(state, payload) {
    // payload内容：
    // {
    //   token:"",
    //   userId:"",
    // }
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  setDidAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
