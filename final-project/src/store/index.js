import { createStore } from "vuex";

import navModule from "./nav/index";
import bodyScreenModule from "./bodyScreen/index";
import authModule from "./auth/index";
import itemsModule from "./items/index";
import cartModule from "./cart/index";

const store = createStore({
  modules: {
    nav: navModule,
    bodyScreen: bodyScreenModule,
    auth: authModule,
    items: itemsModule,
    cart: cartModule,
  },
});

export default store;
