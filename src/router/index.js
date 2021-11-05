import Vue from "vue";
import Router from "vue-router";
import Vuetify from "vuetify";

import Register from "../components/Register";
import Customer from "../components/Customer";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "/dashboard/register",
          name: "register",
          component: Register
        },
        {
          path: "/dashboard/customer",
          name: "customer",
          component: Customer
        }
      ]
    }
  ]
});
