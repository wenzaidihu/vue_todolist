// eslint-disable-next-line no-unused-vars
import $ from "jquery";
import Vue from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
