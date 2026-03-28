<script setup lang="ts">
import { ref, computed } from 'vue'
import { SelectButton } from 'primevue'
import { ALL_PRODUCTS } from '@/mocks/featured-products.mock'
import { CATEGORIES_PRODUCTS } from '@/mocks/categories-products.mock'
import { useCartStore } from '@/stores/cart.store'
import { useToast } from 'primevue/usetoast'
import SectionLayout from '@/components/SectionLayout.vue'
import HeadingH2 from '@/components/HeadingH2.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductDetailModal from '@/components/ProductDetailModal.vue'
import type { FeaturedProducts } from '@/types/featured-products.type'

const cart = useCartStore()
const toast = useToast()

const allProducts = ref(ALL_PRODUCTS.map((p) => ({ ...p })))
const quantities = ref<Record<number, number>>(
  Object.fromEntries(ALL_PRODUCTS.map((p) => [p.id, 1])),
)
const selectedCategoryId = ref<number | null>(null)
const selectedProduct = ref<FeaturedProducts | null>(null)
const showModal = ref(false)
const searchQuery = ref('')

const categoryOptions = [
  { label: 'Todos', value: null },
  ...CATEGORIES_PRODUCTS.map((c) => ({ label: c.name, value: c.id })),
]

const filteredProducts = computed(() => {
  return allProducts.value.filter((p) => {
    const matchesCat =
      selectedCategoryId.value === null || p.category.id === selectedCategoryId.value
    const matchesSearch =
      !searchQuery.value ||
      p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCat && matchesSearch
  })
})

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
    <HeadingH2>Cardápio</HeadingH2>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-3 mb-6 flex-wrap">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Buscar no cardápio..."
        class="search-input flex-1 min-w-48"
      />
      <SelectButton
        v-model="selectedCategoryId"
        :options="categoryOptions"
        optionLabel="label"
        optionValue="value"
      />
    </div>

    <!-- Result count -->
    <p v-if="searchQuery || selectedCategoryId !== null" class="text-sm text-brown-secondary mb-4">
      {{ filteredProducts.length }} produto(s) encontrado(s)
    </p>

    <!-- Empty state -->
    <div v-if="filteredProducts.length === 0" class="text-center py-16 text-brown-secondary">
      <i class="pi pi-search text-5xl mb-4 block opacity-40" />
      <p class="text-lg font-semibold">Nenhum produto encontrado</p>
      <p class="text-sm opacity-70">Tente outro termo ou categoria.</p>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <ProductCard
        v-for="product in filteredProducts"
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
.search-input {
  padding: 0.55rem 0.85rem;
  border: 1px solid var(--color-beige);
  border-radius: 0.5rem;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: var(--color-brown-secondary);
}
</style>
