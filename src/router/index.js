import { createRouter, createWebHistory } from 'vue-router'
// 引入刚刚建好的 HomeView 页面
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView // 绑定组件
    }
  ],
})

export default router
