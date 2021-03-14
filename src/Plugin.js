import VModal from "vue-js-modal";
import Card from "./stories/Card/Card.vue";
import Radio from "./stories/Radio/Radio.vue";
import Modal from "./stories/Modal/Modal.vue";
import Table from "./stories/Table/Table.vue";
import Input from "./stories/Input/Input.vue";
import Image from "./stories/Image/Picture.vue";
import Badge from "./stories/Badge/Badge.vue";
import Toggle from "./stories/Toggle/Toggle.vue";
import Select from "./stories/Select/Multiselect.vue";
import Navbar from "./stories/Navbar/Navbar.vue";
import Button from "./stories/Button/Button.vue";
import SideMenu from "./stories/SideMenu/SideMenu.vue";
import Snackbar from "./stories/Snackbar/Snackbar.vue";
import Checkbox from "./stories/Checkbox/Checkbox.vue";
import Datepicker from "./stories/Datepicker/Datepicker.vue";
import Progressbar from "./stories/Progressbar/Progressbar.vue";
import "./globalStyles.css";
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

module.exports = {
  install: function(Vue) {
    Vue.use(VModal, {
      dialog: true,
      dynamic: true,
      injectModalsContainer: true
    });
    Vue.use(VueTheMask);

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
    Vue.component("star-components", Card);
    Vue.component("star-components", Radio);
    Vue.component("star-components", Modal);
    Vue.component("star-components", Table);
    Vue.component("star-components", Input);
    Vue.component("star-components", Image);
    Vue.component("star-components", Badge);
    Vue.component("star-components", Toggle);
    Vue.component("star-components", Select);
    Vue.component("star-components", Navbar);
    Vue.component("star-components", Button);
    Vue.component("star-components", SideMenu);
    Vue.component("star-components", Snackbar);
    Vue.component("star-components", Checkbox);
    Vue.component("star-components", Datepicker);
    Vue.component("star-components", Progressbar);
  }
};
