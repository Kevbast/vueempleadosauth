import { createWebHistory,createRouter } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import SubordinadosComponent from "./components/SubordinadosComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";

const myRoutes=[
    {path:"/", component:LoginComponent},
    {path:"/home", component:HomeComponent},
    {path:"/perfil", component:PerfilComponent},
    {path:"/subordinados", component:SubordinadosComponent},
]

const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;