<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Toast from 'primevue/toast'
</script>

<template>
  <div class="app-layout">
    <NavBar />
    <main class="app-content">
      <RouterView />
    </main>
    <Footer />
    <Toast position="bottom-right" />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-content {
  flex: 1;
}
</style>
