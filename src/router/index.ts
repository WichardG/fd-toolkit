import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/prompts',
      name: 'prompts',
      component: () => import('../pages/Prompt/PromptOverview.vue')
    },
    {
      path: '/testMethodes',
      name: 'methodes',
      component: () => import('../pages/methodes/MethodeOne.vue')
    }
  ]
})

export default router
