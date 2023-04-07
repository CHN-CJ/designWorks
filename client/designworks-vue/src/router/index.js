import { createRouter, createWebHistory } from 'vue-router'
import SignInUp from '../views/sign-in-up.vue';
import Opening from '../views/opening-animation.vue';
import Upload from '../views/upload-file.vue'

const routes = [
  { path: '/', component: Upload },
  { path: '/sign', component: SignInUp },
  { path: '/open', component: Opening }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router
