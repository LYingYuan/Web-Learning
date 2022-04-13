import { createStore } from "vuex";

import navModule from "./nav/index";
import bodyScreenModule from "./bodyScreen/index";

const store = createStore({
  modules: {
    nav: navModule,
    bodyScreen: bodyScreenModule,
  },
});

export default store;
