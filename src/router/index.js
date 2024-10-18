import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '@/views/Kerja/Jobs.vue'
import Jobdetail from '@/views/Kerja/Jobdetail.vue'
import Notfound from '@/views/Notfound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component:About},
 {
    path:'/jobs',
    name:'jobs',
    component: Jobs

 },

 {path:'/jobs/:id',
  name:'jobdetail',
  component: Jobdetail,
  props:true //need to accept props first
 },
 //redirect
    {
      path:'/all-jobs',
      redirect:'/jobs'

    },
    {
      // 404 syntax for catching all unmatched routes
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: Notfound
    }
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  //back button function
})

export default router
