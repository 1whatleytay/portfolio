import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './components/Home.vue'
import Project from './components/Project.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects/:id', component: Project }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
