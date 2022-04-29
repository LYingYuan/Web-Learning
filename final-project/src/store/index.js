import { createStore } from "vuex";

import navModule from "./nav/index";
import bodyScreenModule from "./bodyScreen/index";
import authModule from "./auth/index";
import itemsModule from "./items/index";

const store = createStore({
  modules: {
    nav: navModule,
    bodyScreen: bodyScreenModule,
    auth: authModule,
    items: itemsModule,
  },
});

export default store;
