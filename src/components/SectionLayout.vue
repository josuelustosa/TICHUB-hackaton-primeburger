<script setup lang="ts">
interface Props {
  bgColor?: 'bg-white' | 'bg-brown-primary' | 'bg-brown-secondary' | 'bg-beige'
}

withDefaults(defineProps<Props>(), {
  bgColor: 'bg-white',
})
</script>

<template>
  <section :class="['px-6 py-8 md:px-12 lg:px-20', bgColor]">
    <slot />
  </section>
</template>
