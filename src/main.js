import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import SortingAlgorithmsPage from "./components/view/SortingPages/SortingAlgorithmsPage.vue";
import AboutPage from "./components/view/AboutPage.vue";
import MainViewPage from "./components/view/MainViewPage.vue";
import SelectionSortPage from "./components/view/SortingPages/SelectionSortPage.vue";
import "./assets/css/global.css";

const routes = [
    {path: "/", component: MainViewPage},
    {path: "/sorting-algorithms", component: SortingAlgorithmsPage},
    {path: "/sorting-algorithms/selection-sort", component: SelectionSortPage},
    {path: "/about", component: AboutPage}
];

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

let app = createApp(App);
app.use(router);

app.mount("#app"); 

