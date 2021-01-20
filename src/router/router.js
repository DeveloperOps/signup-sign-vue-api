import { createWebHistory, createRouter } from "vue-router";
import Landing from '@/views/Landing.vue';
import Signup from '@/views/Signup.vue';
import Signin from '@/views/Signin.vue';
import Home from '@/views/Home.vue';
const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to , from , next) => {

// });

export default router;