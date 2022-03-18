import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExpositionView from "../views/ExpositionView"
import ExposantView from "../views/ExposantView"
import InscriptionView from "../views/InscriptionView"
import LivreDorView from "../views/LivreDorView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/exposition",
    name: "exposition",
    component: ExpositionView,
  },
  {
    path: "/exposant",
    name: "exposant",
    component: ExposantView,
  },
  {
    path: "/inscription",
    name: "inscription",
    component: InscriptionView,
  },
  {
    path: "/livredor",
    name: "livredor",
    component: LivreDorView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
