import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import kvtPlugin from "./plugins/kvt";
Vue.use(kvtPlugin, {}); // skip: process.env.NODE_ENV !== "production"

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
