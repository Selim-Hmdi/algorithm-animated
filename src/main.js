import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import SortingAlgorithmsPage from "./components/view/SortingPages/SortingAlgorithmsPage.vue";
import AboutPage from "./components/view/AboutPage.vue";
import HomePage from "./components/view/HomePage.vue";
import SelectionSortPage from "./components/view/SortingPages/SelectionSortPage.vue";
import "./assets/css/global.css";

const routes = [
    {path: "/", HomePage},
    {path: "/sorting-algorithms", SortingAlgorithmsPage},
    {path: "/sorting-algorithms/selection-sort", SelectionSortPage},
    {path: "/about", AboutPage}
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

let app = createApp(App);
app.use(router);

app.mount("#app"); 

