import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import APlayer from "@moefe/vue-aplayer";
import VCharts from "v-charts";
// import highlight from 'highlight.js';
// Vue.use(highlight);

//封装成一个指令
// Vue.directive('highlight', (el) => {
//   let blocks = el.querySelectorAll('pre code')
//   blocks.forEach((block) => {
//     highlight.highlightBlock(block)
//   })
// })

Vue.use(ElementUI);
Vue.use(APlayer);
Vue.use(VCharts);

Vue.config.productionTip = false;

//emit分发事件，on监听事件。实现兄弟间组件通信
export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
