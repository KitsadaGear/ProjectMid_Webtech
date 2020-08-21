import Vue from "vue"
import App from "./App"
import { router } from "./router"
import VueMoment from "vue-moment"

import { firestorePlugin } from "vuefire"
import { store } from './stores'


Vue.use(firestorePlugin)
Vue.use(VueMoment)


// bootstrap vue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  // components: { App },
  // template: "<App/>",
  store 
});
