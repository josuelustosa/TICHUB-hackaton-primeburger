<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-layout">
    <NavBar />
    <main class="app-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
