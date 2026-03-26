<script setup lang="ts">
import { Galleria } from 'primevue'
import { HERO_IMAGES } from '@/mocks/hero-images.mock'
</script>

<template>
  <section class="hero-carousel">
    <Galleria
      :value="HERO_IMAGES"
      :numVisible="HERO_IMAGES.length"
      :circular="true"
      :autoPlay="true"
      :transitionInterval="5000"
      :showItemNavigators="true"
      :showThumbnails="true"
      :showThumbnailNavigators="false"
      :showIndicators="false"
      containerStyle="width: 100%"
    >
      <template #item="{ item }">
        <img
          :key="item.id"
          :src="item.itemImageSrc"
          :alt="item.alt"
          :title="item.alt"
          class="hero-image"
        />
      </template>
      <template #thumbnail="{ item }">
        <span :key="item.id" class="hero-indicator-dot" />
      </template>
    </Galleria>
  </section>
</template>

<style scoped>
.hero-image {
  width: 100%;
  height: clamp(260px, 45vw, 520px);
  object-fit: contain;
  display: block;
  background-color: var(--color-beige);
}

.hero-carousel :deep(.p-galleria-thumbnails-content) {
  justify-content: center;
}

.hero-carousel :deep(.p-galleria-thumbnail-items) {
  justify-content: center;
  gap: 0.5rem;
}

.hero-carousel :deep(.p-galleria-thumbnail-item) {
  flex: 0 0 auto !important;
}

.hero-carousel :deep(.p-galleria-thumbnail) {
  background: transparent;
  border: 0;
  padding: 0.1rem;
  min-width: unset;
}

.hero-indicator-dot {
  width: 0.68rem;
  height: 0.68rem;
  border-radius: 100%;
  background-color: color-mix(in srgb, var(--color-brown-secondary) 52%, #ffffff);
  display: block;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.hero-carousel :deep(.p-galleria-thumbnail-item-current .hero-indicator-dot) {
  background-color: var(--color-brown-primary);
  transform: scale(1.12);
}
</style>
