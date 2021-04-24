require('./bootstrap')

import Vue from "vue";
import VueRouter from 'vue-router'
import router from "./router/router.js";
import App from "./App.vue"
import './../assets/css/forum.css'
require('./bootstrap');

Vue.use(VueRouter)

window.Vue = require("vue").default;
new Vue({
    render:h=>h(App),
    components:{App},
    router
}).$mount('#app');
