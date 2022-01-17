import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import MainView from "@/views/MainView.vue";
import HomeView from "@/views/HomeView.vue";
import InforScreenView from "@/views/InfoScreenView.vue";
import ConfigView from "@/views/ConfigView.vue";
import FavoritesView from "@/views/FavoritesView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: MainView,
        children:[
            {
                path:'',
                name:'home',
                component:HomeView
            },
            {
                path:'info',
                name:'info',
                component:InforScreenView
            },
            {
                path:'settings',
                name:'settings',
                component:ConfigView
            },
            {
                path:'favorites',
                name:'favorites',
                component:FavoritesView
            },
        ]
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;