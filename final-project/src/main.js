import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import BaseLink from "./components/ui/BaseLink.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-link", BaseLink);

app.mount("#app");
