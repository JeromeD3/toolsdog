import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// 这里
import "@/styles/normalize.css";
import "./assets/main.css";
// 导入Unocss样式
import "uno.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
