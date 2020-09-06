import Vue from "vue";
import Welcome from "../views/Welcome";
import Home from "../views/Home";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Detail from "../views/Detail.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import Reference from "../views/Reference.vue";
import Donate from "../views/Donate.vue";
import VueRouter from "vue-router";
import Logout from "@/views/Logout.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/", 
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/home-view",
    name: "Home",
    component: Home
  },
  {
    path: "/about-view",
    name: "About",
    component: About
  },
  {
    path: "/contact-view",
    name: "Contact",
    component: Contact
  },
  {
    path: "/detail-view",
    name: "Detail",
    component: Detail
  },
  {
    path: "/login-view",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/register-view",
    name: "RegisterPage",
    component: RegisterPage
  },
  {
    path: "/reference-view",
    name: "Reference",
    component: Reference
  },
  {
    path: "/donate-view",
    name: "Donate",
    component: Donate
  },
  {
    path: "/logout-view",
    name: "logout",
    component: Logout
  }
];
export const router = new VueRouter({
  mode: "history",
  routes
});
