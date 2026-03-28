<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'primevue'
import { FEATURED_PRODUCTS } from '@/mocks/featured-products.mock'
import { useCartStore } from '@/stores/cart.store'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'
import SectionLayout from '../SectionLayout.vue'
import HeadingH2 from '../HeadingH2.vue'
import ProductCard from '../ProductCard.vue'
import ProductDetailModal from '../ProductDetailModal.vue'
import type { FeaturedProducts } from '@/types/featured-products.type'

const cart = useCartStore()
const toast = useToast()
const router = useRouter()

const featuredProducts = ref(FEATURED_PRODUCTS.map((p) => ({ ...p })))
const quantities = ref<Record<number, number>>(
  Object.fromEntries(FEATURED_PRODUCTS.map((p) => [p.id, 1])),
)
const selectedProduct = ref<FeaturedProducts | null>(null)
const showModal = ref(false)

const openModal = (product: FeaturedProducts) => {
  selectedProduct.value = product
  showModal.value = true
}

const addToCart = (product: FeaturedProducts) => {
  const qty = quantities.value[product.id] ?? 1
  cart.addItem(product, qty)
  toast.add({
    severity: 'success',
    summary: 'Adicionado!',
    detail: `${product.name} adicionado à comanda.`,
    life: 2500,
  })
}

const addToCartFromModal = () => {
  if (selectedProduct.value) {
    addToCart(selectedProduct.value)
    showModal.value = false
  }
}
</script>

<template>
  <SectionLayout>
    <div class="flex items-center justify-between flex-wrap gap-2 mb-0">
      <HeadingH2>Top Burgers</HeadingH2>
      <Button
        label="Ver Cardápio Completo"
        icon="pi pi-arrow-right"
        iconPos="right"
        text
        class="see-all-btn"
        @click="router.push('/cardapio')"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in featuredProducts"
        :key="product.id"
        :product="product"
        :quantity="quantities[product.id] ?? 1"
        @update:quantity="(v) => (quantities[product.id] = v)"
        @add-to-cart="addToCart(product)"
        @open-modal="openModal(product)"
      />
    </div>
  </SectionLayout>

  <ProductDetailModal
    :product="selectedProduct"
    :visible="showModal"
    @update:visible="showModal = $event"
    @add-to-cart="addToCartFromModal"
  />
</template>

<style scoped>
.see-all-btn {
  color: var(--color-brown-secondary) !important;
  font-weight: 600;
}
</style>
