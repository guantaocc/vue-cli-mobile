import Vue from "vue";
import App from "./App.vue";

/**
 * rem flexible
 */

import "amfe-flexible";

/**
 * vant ui
 */
import { Toast, Dialog } from "vant";
import FastClick from "fastclick";
FastClick.attach(document.body);
import Vconsole from "vconsole";

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-unused-vars
  const vConsole = new Vconsole({
    defaultPlugin: ["system", "network", "element"],
    maxLogNumber: "1024",
    onReady: () => console.log("vconsole is ready"),
  });
}

Vue.config.productionTip = false;

Vue.use(Toast);
Vue.use(Dialog);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
