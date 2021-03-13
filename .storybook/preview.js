import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight, faCalendarAlt, faTimesCircle, faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueTheMask from "vue-the-mask";

Vue.use(VueTheMask);

library.add(faAngleLeft, faAngleRight, faCalendarAlt, faTimesCircle, faCode)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// .storybook/preview.js

export const decorators = [(story) => ({
  components: { story },
  template: '<div style="background-color:#f8f8f2; padding: 50px;"><story /></div>'
})];