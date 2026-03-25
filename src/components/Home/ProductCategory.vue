<script setup lang="ts">
import { CATEGORIES_PRODUCTS } from '@/mocks/categories-products.mock'
import SectionLayout from '../SectionLayout.vue'
import HeadingH2 from '../HeadingH2.vue'
</script>

<template>
  <SectionLayout bg-color="bg-beige">
    <h2 class="heading-h2">Categorias de Sabor</h2>
    <HeadingH2>Categorias de Sabor</HeadingH2>

    <div class="grid grid-cols-1 gap-4 md:gap-5 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="category in CATEGORIES_PRODUCTS"
        :key="category.id"
        class="bg-brown-primary shadow-sm p-5 rounded-2xl"
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
      </div>
    </div>
  </SectionLayout>
</template>
