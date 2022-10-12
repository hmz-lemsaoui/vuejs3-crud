import HomePage from './components/Home.vue'
import SignUp from './components/SingUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LogIn from './components/Login.vue'
import AddResto from './components/Add.vue'
import UpdateResto from './components/Update.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/login',
        name: 'Login',
        component: LogIn
    },
    {
        path: '/addrestaurant',
        name: 'addResto',
        component: AddResto
    },
    {
        path: '/updaterestaurant/:id',
        name: 'updateResto',
        component: UpdateResto
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;