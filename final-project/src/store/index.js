import { createStore } from "vuex";

import navModule from "./nav/index";

const store = createStore({
  modules: {
    nav: navModule,
  },
});

export default store;
