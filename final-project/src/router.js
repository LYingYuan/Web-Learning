import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/dangdang" },
    { path: "/dangdang", component: HomePage },
    { path: "/auth", component: null },
  ],
});

export default router;
