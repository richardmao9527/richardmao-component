import Vue from "vue";
import App from "./App.vue";
import polyUI from "./packages/index"; // 引入自己的ui库
Vue.use(polyUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
