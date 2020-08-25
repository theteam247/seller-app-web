import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home/Home.vue";
import Confirmation from "../views/Confirmation/Confirmation.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    component: Confirmation
  }
];

const router = new VueRouter({
  routes
});

export default router;
