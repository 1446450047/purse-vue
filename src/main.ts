import Vue from "vue";
import App from "./App.vue";
import "@/assets/reset.scss"
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
Vue.config.productionTip = false;
Vue.component("Nav", Nav);
Vue.component("Icon",Icon);
Vue.component("Layout",Layout);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
