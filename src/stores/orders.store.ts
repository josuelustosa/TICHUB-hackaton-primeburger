import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CartItem } from '@/types/cart.type'

export type OrderStatus = 'pendente' | 'preparando' | 'pronto' | 'entregue'

export type Order = {
  id: number
  items: CartItem[]
  total: number
  status: OrderStatus
  createdAt: Date
  customerName: string
}

const STATUS_LABELS: Record<OrderStatus, string> = {
  pendente: 'Pendente',
  preparando: 'Preparando',
  pronto: 'Pronto!',
  entregue: 'Entregue',
}

const STATUS_SEVERITY: Record<OrderStatus, string> = {
  pendente: 'warn',
  preparando: 'info',
  pronto: 'success',
  entregue: 'secondary',
}

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<Order[]>([])
  let nextId = 1

  function createOrder(items: CartItem[], total: number, customerName: string): Order {
    const order: Order = {
      id: nextId++,
      items: items.map((i) => ({ ...i })),
      total,
      status: 'pendente',
      createdAt: new Date(),
      customerName,
    }
    orders.value.unshift(order)
    // Simulate status progression
    setTimeout(() => updateStatus(order.id, 'preparando'), 8000)
    setTimeout(() => updateStatus(order.id, 'pronto'), 20000)
    return order
  }

  function updateStatus(orderId: number, status: OrderStatus) {
    const order = orders.value.find((o) => o.id === orderId)
    if (order) order.status = status
  }

  return { orders, createOrder, updateStatus, STATUS_LABELS, STATUS_SEVERITY }
})
