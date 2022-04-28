import { createStore } from "vuex";

import navModule from "./nav/index";
import bodyScreenModule from "./bodyScreen/index";
import authModule from "./auth/index";

const store = createStore({
  modules: {
    nav: navModule,
    bodyScreen: bodyScreenModule,
    auth: authModule,
  },
});

export default store;
