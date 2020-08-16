import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Detail from "@/components/Detail.vue";
import LoginPage from "@/components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import Reference from "@/components/Reference.vue";
import Donate from "@/components/Donate.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
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
  }
];
export default new Router({ mode: "history", routes });
