import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/pages/HomePage.vue";
import UserAuth from "./components/pages/UserAuth.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/dangdang" },
    { path: "/dangdang", component: HomePage },
    { path: "/auth", component: UserAuth },
  ],
});

export default router;
