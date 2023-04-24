import { createRouter, createWebHistory } from 'vue-router'
import SignInUp from '../views/sign-in-up.vue';
import Opening from '../views/opening-animation.vue';
import Upload from '../views/upload-file.vue'
import AllPic from '../views/allPic.vue';
import LoginRegister from '../views/login-register.vue';
import ShowMessage from '../views/show-message.vue';
import HomePage from '../views/home-page.vue'
import APP from '../App.vue'

const routes = [
  { path: '/', component: AllPic },
  // { path: '/allPic', component: AllPic, redirect: '/' },
  { path: '/allPic', component: AllPic },
  { path: '/upload', component: Upload },
  { path: '/login_register', component: LoginRegister },
  { path: '/message', component: ShowMessage },
  { path: '/sign', component: SignInUp },
  { path: '/open', component: Opening }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router
