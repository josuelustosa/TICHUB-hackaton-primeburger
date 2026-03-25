<script setup lang="ts">
import { Button, Card, InputNumber } from 'primevue'
import { ref } from 'vue'

import { FEATURED_PRODUCTS } from '@/mocks/featured-products.mock'
import SectionLayout from '../SectionLayout.vue'
import HeadingH2 from '../HeadingH2.vue'

const featuredProducts = ref(FEATURED_PRODUCTS.map((product) => ({ ...product })))

const addToCommand = () => {
  alert('Produto adicionado ao carrinho com sucesso!')
}

const addToFavorite = (productId: number) => {
  const product = featuredProducts.value.find((item) => item.id === productId)

  if (!product) return

  product.favorite = !product.favorite

  if (product.favorite) {
    alert('Produto favoritado com sucesso!')
    return
  }

  alert('Produto removido dos favoritos com sucesso!')
}
</script>

<template>
  <SectionLayout>
    <HeadingH2>Top Burgers</HeadingH2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        style="overflow: hidden"
        class="w-full border-2 border-beige"
        v-for="product in featuredProducts"
        :key="product.id"
      >
        <template #header>
          <img
            :alt="product.name"
            :src="product.img"
            class="py-4 w-full h-48 md:h-52 lg:h-56 object-contain"
          />
        </template>
        <template #title>
          <h3 class="text-lg sm:text-xl md:text-lg lg:text-xl font-bold text-brown-primary">
            {{ product.name }}
          </h3>
        </template>
        <template #subtitle>
          <p class="text-sm sm:text-base text-brown-secondary">{{ product.category.name }}</p>
        </template>
        <!--
            IMPLEMENTAR A LÓGICA DE DESCRIÇÃO SOMENTE QUANDO FOR APRESENTAR O PRODUTO EM MODAL
            PARA ATENDER O REQUISITO DE MVP: PÁGINA DE DETALHES DO PRODUTOS
          -->
        <!-- <template #content>
            <p class="m-0 text-sm sm:text-base leading-relaxed text-gray-700">
              {{ product.description }}
            </p>
          </template> -->
        <template #footer>
          <div class="flex flex-col gap-3 sm:gap-4 mt-1">
            <div class="flex items-center justify-between gap-3">
              <span class="text-brown-primary text-base lg:text-lg font-bold w-full"
                >R$ {{ product.price.toFixed(2).replace('.', ',') }}</span
              >
              <InputNumber
                showButtons
                buttonLayout="horizontal"
                mode="decimal"
                :min="1"
                :max="10"
                :default-value="1"
                class="w-full"
                fluid
                size="small"
              >
                <template #incrementicon>
                  <span class="pi pi-plus" />
                </template>
                <template #decrementicon>
                  <span class="pi pi-minus" />
                </template>
              </InputNumber>
            </div>
            <div class="flex items-center justify-start gap-3">
              <Button
                icon="pi pi-cart-plus"
                label="Add+"
                severity="success"
                aria-label="Adicionar ao carrinho"
                class="w-full"
                size="small"
                @click="addToCommand()"
              />
              <Button
                :icon="product.favorite ? 'pi pi-heart-fill' : 'pi pi-heart'"
                :label="product.favorite ? 'Remover' : 'Favoritar'"
                :severity="product.favorite ? 'danger' : 'secondary'"
                :aria-label="product.favorite ? 'Remover dos favoritos' : 'Favoritar'"
                class="w-full"
                size="small"
                @click="addToFavorite(product.id)"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </SectionLayout>
</template>

<style></style>
