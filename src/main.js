import Vue from "vue";
import App from "./App.vue";
import VModal from "vue-js-modal";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleLeft,
  faAngleRight,
  faCalendarAlt,
  faTimesCircle,
  faCode,
  faCaretDown,
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueTheMask from "vue-the-mask";

Vue.use(VueTheMask);
Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });

library.add(
  faAngleLeft,
  faAngleRight,
  faCalendarAlt,
  faTimesCircle,
  faCaretDown,
  faCaretUp,
  faCode
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
