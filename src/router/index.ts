import { createRouter, createWebHashHistory } from 'vue-router'
import { projects } from '@/components/projects/projects'

const projectsRoutes = projects.map(p => ({
  'path': '/project/' + p.name,
  'name': p.name,
  'component': p.component
}));

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/project'
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    ...projectsRoutes
  ]
})

export default router
