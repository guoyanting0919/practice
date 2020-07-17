import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./api/apis";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-TW";
import "element-ui/lib/theme-chalk/index.css";
import Directives from "./utils/directives";
import baffle from "baffle";
Vue.use(Directives);
Vue.use(VueAxios, axios);
Vue.use(ElementUI, { locale });

// all(建議放套件Css下層)
import "../src/assets/all.scss";

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$baffle = baffle;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
