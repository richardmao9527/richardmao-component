import Vue from "vue";
import App from "./App.vue";
import RichardUi from "richard-ui3121";
import "../node_modules/richard-ui3121/pig-ui.css";
import polyUI from "./packages/index"; // 引入自己的ui库
Vue.use(polyUI);
Vue.use(RichardUi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
