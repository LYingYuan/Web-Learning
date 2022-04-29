import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/pages/HomePage.vue";
import UserAuth from "./components/pages/UserAuth.vue";
import UserCart from "./components/pages/UserCart.vue";
import ItemDetail from "./components/pages/ItemDetail.vue";
import store from "./store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/dangdang" },
    { path: "/dangdang", component: HomePage },
    { path: "/dangdang/:itemId", component: ItemDetail, props: true },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    {
      path: "/shoppingcart",
      component: UserCart,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/dangdang");
  } else {
    next();
  }
});

export default router;
