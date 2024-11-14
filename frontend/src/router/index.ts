import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/home/WelcomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/home/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/home/LogoutView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/home/SignupView.vue')
    },
    {
      path: '/secret/notes',
      name: 'notes.list',
      component: () => import('../views/notes/ListView.vue')
    },
    {
      path: '/secret/notes/new',
      name: 'notes.new',
      component: () => import('../views/notes/NewView.vue')
    },
    {
      path: '/secret/notes/edit/:id',
      name: 'notes.edit',
      component: () => import('../views/notes/EditView.vue')
    },
    {
      path: '/secret/notes/delete/:id',
      name: 'notes.delete',
      component: () => import('../views/notes/DeleteView.vue')
    },
    {
      path: '/secret/notes/:id',
      name: 'notes.detail',
      component: () => import('../views/notes/DetailView.vue')
    },
  ]
})

export default router
