import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import SortingAlgorithmsPage from "./components/view/SortingAlgorithmsPage.vue";
import AboutPage from "./components/view/AboutPage.vue";
import HomePage from "./components/view/HomePage.vue";
import "./assets/global.css";

const routes = [
    {path: "/", HomePage},
    {path: "/sorting-algorithms", SortingAlgorithmsPage},
    {path: "/about", AboutPage}
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

let app = createApp(App);
app.use(router);

app.mount("#app"); 

