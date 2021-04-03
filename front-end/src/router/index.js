import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Bikes from "../views/Bikes";
import About from "../views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bikes",
    name: "Bikes",
    component: Bikes,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
