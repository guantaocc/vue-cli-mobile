import Vue from "vue";
import App from "./App.vue";

/**
 * reset css
 */
import "reset.css"

/**
 * vant
 */
import './plugins/vant'

/**
 * vant ui
 */
import FastClick from "fastclick";
FastClick.attach(document.body);

if (process.env.NODE_ENV === "development") {
  const Vconsole = require('vconsole')
  new Vconsole({
    defaultPlugin: ["system", "network", "element"],
    maxLogNumber: "1024",
    onReady: () => console.log("vconsole is ready"),
  });
}

Vue.config.productionTip = false;


new Vue({
  render: (h) => h(App),
}).$mount("#app");