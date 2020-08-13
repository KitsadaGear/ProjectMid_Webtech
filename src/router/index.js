import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Detail from "@/components/Detail.vue";
import LoginPage from "@/components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import Reference from "@/components/Reference.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail
  },
  {
    path: "/loginPage",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/registerPage",
    name: "RegisterPage",
    component: RegisterPage
  },
  {
    path: "/reference",
    name: "Reference",
    component: Reference
  }
];
export default new Router({ mode: "history", routes });
