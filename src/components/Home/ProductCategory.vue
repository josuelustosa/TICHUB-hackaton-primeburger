<script setup lang="ts">
import { useRouter } from 'vue-router'
import { CATEGORIES_PRODUCTS } from '@/mocks/categories-products.mock'
import SectionLayout from '../SectionLayout.vue'
import HeadingH2 from '../HeadingH2.vue'

const router = useRouter()

const goToMenu = () => {
  router.push('/cardapio')
}
</script>

<template>
  <SectionLayout bg-color="bg-beige">
    <HeadingH2>Categorias de Sabor</HeadingH2>

    <div class="grid grid-cols-1 gap-4 md:gap-5 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="category in CATEGORIES_PRODUCTS"
        :key="category.id"
        class="bg-brown-primary shadow-sm p-5 rounded-2xl category-card cursor-pointer"
        @click="goToMenu"
      >
        <div class="flex items-center justify-between gap-4">
          <div class="text-beige font-semibold text-lg lg:text-xl! leading-tight!">
            {{ category.name }}
          </div>
          <div
            class="flex items-center justify-center bg-brown-secondary rounded-lg w-12 h-12 md:w-14 md:h-14 lg:w-18 lg:h-18"
          >
            <i
              :class="[
                'pi',
                category.icon,
                'text-beige text-xl! md:text-2xl! lg:text-4xl! leading-none!',
              ]"
            />
          </div>
        </div>
        <p class="text-beige text-xs mt-3 opacity-70">Ver todos →</p>
      </div>
    </div>
  </SectionLayout>
</template>

<style scoped>
.category-card {
  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.category-card:hover {
  background-color: var(--color-brown-secondary);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px -4px rgba(62, 39, 35, 0.3);
}
</style>
