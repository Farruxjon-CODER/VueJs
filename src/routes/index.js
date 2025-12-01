import { createRouter, createWebHistory } from "vue-router"
import Index from "../pages/index.vue"
import About from "../pages/about.vue"
import Contact from "../pages/contact.vue"
import Service from "../pages/service.vue"
import Homework from "../pages/homework.vue"

const routes = [
    {path: "/", component: Index},
    {path: "/about", component: About},
    {path: "/contact", component: Contact},
    {path: "/service", component: Service},
    {path: "/homework-page", component: Homework}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

