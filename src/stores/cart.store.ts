import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartItem } from '@/types/cart.type'
import type { FeaturedProducts } from '@/types/featured-products.type'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const totalItems = computed(() => items.value.reduce((acc, item) => acc + item.quantity, 0))

  const totalPrice = computed(() =>
    items.value.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
  )

  function addItem(product: FeaturedProducts, quantity = 1) {
    const existing = items.value.find((i) => i.product.id === product.id)
    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, 10)
    } else {
      items.value.push({ product, quantity })
    }
  }

  function removeItem(productId: number) {
    items.value = items.value.filter((i) => i.product.id !== productId)
  }

  function updateQuantity(productId: number, quantity: number) {
    const item = items.value.find((i) => i.product.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeItem(productId)
      } else {
        item.quantity = Math.min(quantity, 10)
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  return { items, totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart }
})
