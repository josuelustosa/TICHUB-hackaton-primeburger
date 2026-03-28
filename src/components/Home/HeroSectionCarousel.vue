<script setup lang="ts">
import { Galleria, Button } from 'primevue'
import { useRouter } from 'vue-router'
import { HERO_IMAGES } from '@/mocks/hero-images.mock'

const router = useRouter()
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
        <div class="hero-slide">
          <img
            :key="item.id"
            :src="item.itemImageSrc"
            :alt="item.alt"
            :title="item.alt"
            class="hero-image"
          />
          <div v-if="item.title" class="hero-overlay">
            <div class="hero-text">
              <h2 class="hero-title">{{ item.title }}</h2>
              <p class="hero-subtitle">{{ item.subtitle }}</p>
              <Button
                v-if="item.cta"
                :label="item.cta"
                class="hero-cta-btn"
                @click="router.push('/cardapio')"
              />
            </div>
          </div>
        </div>
      </template>
      <template #thumbnail="{ item }">
        <span :key="item.id" class="hero-indicator-dot" />
      </template>
    </Galleria>
  </section>
</template>

<style scoped>
.hero-slide {
  position: relative;
  width: 100%;
}

.hero-image {
  width: 100%;
  height: clamp(260px, 45vw, 520px);
  object-fit: contain;
  display: block;
  background-color: var(--color-beige);
}

.hero-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(62, 39, 35, 0.85) 0%, transparent 100%);
  padding: 2rem 2.5rem 3rem;
}

.hero-text {
  max-width: 480px;
}

.hero-title {
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 800;
  color: var(--color-beige);
  line-height: 1.2;
  margin-bottom: 0.4rem;
}

.hero-subtitle {
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  color: rgba(215, 204, 200, 0.85);
  margin-bottom: 1rem;
}

.hero-cta-btn {
  background-color: var(--color-beige) !important;
  border-color: var(--color-beige) !important;
  color: var(--color-brown-primary) !important;
  font-weight: 700 !important;
  border-radius: 9999px !important;
}

.hero-cta-btn:hover {
  background-color: white !important;
  border-color: white !important;
}

.hero-carousel :deep(.p-galleria-thumbnails-content) {
  justify-content: center;
  background-color: var(--color-beige);
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
