import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/_app.scss";
import devices from "@/plugins/devices/index";

Vue.config.productionTip = false;

Vue.use(devices, {
  phone: "max-width: 567px",
  tablet: "min-width: 568px",
  mobile: "max-width: 1024px",
  laptop: "min-width: 1025px",
  desktop: "min-width: 1280px",
  monitor: "min-width: 1448px"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
