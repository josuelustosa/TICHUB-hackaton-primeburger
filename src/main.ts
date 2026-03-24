import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      // O PrimeVue só ficaria escuro se o <html> tivesse a classe .my-app-dark
      // Tentativa correta para definir o tema claro como padrão
      darkModeSelector: '.my-app-dark',
    },
  },
})

app.mount('#app')
