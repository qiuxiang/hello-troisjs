import { createApp } from "vue";
import { TroisJSVuePlugin } from "troisjs";
import Main from "./Main.vue";

const app = createApp(Main);
app.use(TroisJSVuePlugin);
app.mount("#main");
