import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',  // 新增命名路由
    component: () => import('../views/index.vue')
  },
  {
    path: '/graph',
    name: 'Graph',  // 新增命名路由
    component: () => import('../views/graph.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
