import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import CommandView from '../views/CommandView.vue'
import OrdersView from '../views/OrdersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cardapio',
      name: 'Cardápio',
      component: MenuView,
    },
    {
      path: '/minha-comanda',
      name: 'Minha Comanda',
      component: CommandView,
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: OrdersView,
    },

    // Qualquer URL não configurada aqui é redirecionada para Home automaticamente
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    },
  ],
})

export default router
