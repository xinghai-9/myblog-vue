import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import APlayer from "@moefe/vue-aplayer";
import VCharts from "v-charts";
import VueSession from "vue-session";

Vue.use(ElementUI);
Vue.use(APlayer);
Vue.use(VCharts);

var options = {
  persist: true
}
Vue.use(VueSession,options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
