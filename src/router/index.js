import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: () => import("../components/Login.vue") },
    { path: '/register', name: 'Register', component: () => import("../components/Register.vue") }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
        linkActiveClass: 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
    }
);

export default router;