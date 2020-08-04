import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LemonUI from 'vue-lemon-ui'
import 'vue-lemon-ui/dist/index.css'
import ElementUI from 'element-ui';
import CodeWrapper from './components/CodeWrapper'
import Attribute from './components/Attribute'
import 'element-ui/lib/theme-chalk/index.css';
// import {
//   Button,
//   Input,
//   Layout,
//   Toast,
//   Collapse,
//   Popover,
//   Tab,
//   Container
// } from 'element-ui';

Vue.use(ElementUI);
Vue.config.productionTip = false;
// Vue.use(Button)
// Vue.use(Input)
// Vue.use(Layout)
// Vue.use(Toast)
// Vue.use(Collapse)
// Vue.use(Popover)
// Vue.use(Tab)
// Vue.use(Container)
Vue.use(LemonUI)
Vue.component('code-wrapper', CodeWrapper)
Vue.component('l-attribute', Attribute)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


