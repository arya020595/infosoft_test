import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from 'vue'
import App from './App.vue'

library.add(fas, far)
dom.watch();

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");