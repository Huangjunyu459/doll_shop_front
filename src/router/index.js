import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ZhiouZoneView from '../views/ZhiouZoneView.vue' // 引入你刚刚新建的指偶专区页面

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // 添加这一个指偶专区的路由：
    {
      path: '/zone/zhiou',
      name: 'ZhiouZone',
      component: ZhiouZoneView
    }
  ]
})

export default router
