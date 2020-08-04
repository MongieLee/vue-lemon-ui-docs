import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: '/development/recommend',
    component: () => import("../views/Home.vue"),
    children: [
      { path: 'development/quickstart', component: () => import("../components/Install.vue") },
      { path: 'development/recommend', component: () => import("../components/Recommend.vue") },
      { path: 'component/button', component: () => import("../components/Button.vue") },
      { path: 'component/input', component: () => import("../components/Input.vue") },
      { path: 'component/layout', component: () => import("../components/Layout.vue") },
      { path: 'component/container', component: () => import("../components/Container.vue") },
      { path: 'component/popover', component: () => import("../components/Popover.vue") },
      { path: 'component/tab', component: () => import("../components/Tab.vue") },
      { path: 'component/accordion', component: () => import("../components/Collapse.vue") },
      { path: 'component/toast', component: () => import("../components/Toast.vue") },
    ]
  },
  {
    path: "*",
    component: () => import("../components/error.vue")
  }

];
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}//作用为屏蔽错误

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
});
export default router;
