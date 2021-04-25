import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Gallery from "../components/Gallery";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Gallery
        }

    ]
});