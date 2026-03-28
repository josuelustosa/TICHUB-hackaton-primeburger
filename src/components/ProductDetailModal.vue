<script setup lang="ts">
import { Button, Badge, Dialog } from 'primevue'
import type { FeaturedProducts } from '@/types/featured-products.type'

interface Props {
  product: FeaturedProducts | null
  visible: boolean
}

defineProps<Props>()
const emit = defineEmits<{
  'update:visible': [value: boolean]
  'add-to-cart': []
}>()
</script>

<template>
  <Dialog
    :visible="visible"
    @update:visible="emit('update:visible', $event)"
    :header="product?.name"
    modal
    :style="{ width: '90vw', maxWidth: '480px' }"
    :draggable="false"
  >
    <template v-if="product">
      <img
        :src="product.img"
        :alt="product.name"
        class="w-full h-56 object-contain rounded-lg mb-4"
        style="background-color: var(--color-beige)"
      />
      <div class="flex items-center gap-2 mb-3">
        <span class="text-sm font-medium px-2 py-1 rounded-full bg-beige text-brown-secondary">
          {{ product.category.name }}
        </span>
        <Badge v-if="product.badge" :value="product.badge" severity="warn" />
      </div>
      <p class="text-gray-700 leading-relaxed mb-5 text-sm">{{ product.description }}</p>
      <div class="flex items-center justify-between">
        <span class="text-2xl font-extrabold text-brown-primary">
          R$ {{ product.price.toFixed(2).replace('.', ',') }}
        </span>
        <Button
          icon="pi pi-cart-plus"
          label="Adicionar à Comanda"
          severity="success"
          @click="emit('add-to-cart')"
        />
      </div>
    </template>
  </Dialog>
</template>
