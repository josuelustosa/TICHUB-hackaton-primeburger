<script setup lang="ts">
import { Button, Card, InputNumber, Badge } from 'primevue'
import type { FeaturedProducts } from '@/types/featured-products.type'

interface Props {
  product: FeaturedProducts
  quantity: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:quantity': [value: number]
  'add-to-cart': []
  'open-modal': []
}>()
</script>

<template>
  <Card style="overflow: hidden" class="w-full border-2 border-beige product-card">
    <template #header>
      <div class="relative">
        <img
          :alt="product.name"
          :src="product.img"
          class="py-4 w-full h-44 object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
          style="background-color: var(--color-beige)"
          @click="emit('open-modal')"
        />
        <Badge v-if="product.badge" :value="product.badge" class="product-badge" severity="warn" />
      </div>
    </template>
    <template #title>
      <h3
        class="text-base font-bold text-brown-primary cursor-pointer hover:underline"
        @click="emit('open-modal')"
      >
        {{ product.name }}
      </h3>
    </template>
    <template #subtitle>
      <p class="text-xs text-brown-secondary">{{ product.category.name }}</p>
    </template>
    <template #footer>
      <div class="flex flex-col gap-2 mt-1">
        <div class="flex items-center justify-between gap-2">
          <span class="text-brown-primary font-bold text-sm">
            R$ {{ product.price.toFixed(2).replace('.', ',') }}
          </span>
          <InputNumber
            :modelValue="quantity"
            @update:modelValue="(v) => emit('update:quantity', v ?? 1)"
            showButtons
            buttonLayout="horizontal"
            :min="1"
            :max="10"
            fluid
            size="small"
          >
            <template #incrementicon><span class="pi pi-plus" /></template>
            <template #decrementicon><span class="pi pi-minus" /></template>
          </InputNumber>
        </div>
        <Button
          icon="pi pi-cart-plus"
          label="Adicionar"
          severity="success"
          size="small"
          class="w-full"
          @click="emit('add-to-cart')"
        />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.product-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.product-card {
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.product-card:hover {
  box-shadow: 0 10px 25px -5px rgba(62, 39, 35, 0.15);
  transform: translateY(-2px);
}
</style>
