import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('components/Login.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import("common/Home.vue"),
    children: [
      {
        path: '/homepage',
        component: () => import("components/HomePage.vue"),
        meta:{
          name:'/homepage'
        }
      },
      {
        path: '/notice',
        component: () => import("components/Notice.vue"),
        meta:{
          name:'/notice'
        }
      },
      {
        path: '/mylab',
        component: () => import("components/MyLab.vue"),
        meta:{
          name:'/mylab'
        }
      },
      {
        path: '/stuManager',
        component: () => import("components/StudentManager.vue"),
        meta:{
          name:'/stuManager'
        }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
