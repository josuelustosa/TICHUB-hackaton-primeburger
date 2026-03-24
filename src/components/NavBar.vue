<script setup lang="ts">
import { Button, Menubar, Badge } from 'primevue'

import { ref } from 'vue'

const items = ref([
  {
    label: 'Página Inicial',
    // icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'Cardápio',
    route: '/cardapio',
  },
  {
    label: 'Minha Comanda',
    route: '/minha-comanda'
  },
  {
    label: 'Pedidos',
    route: '/pedidos'
  },
  // {
  //   label: 'Projects',
  //   icon: 'pi pi-search',
  //   badge: 3,
  //   items: [
  //     {
  //       label: 'Core',
  //       icon: 'pi pi-bolt',
  //       shortcut: '⌘+S',
  //     },
  //     {
  //       label: 'Blocks',
  //       icon: 'pi pi-server',
  //       shortcut: '⌘+B',
  //     },
  //     {
  //       separator: true,
  //     },
  //     {
  //       label: 'UI Kit',
  //       icon: 'pi pi-pencil',
  //       shortcut: '⌘+U',
  //     },
  //   ],
  // },
  {
    separator: true,
    class: 'menu-auth-mobile-separator',
  },
  {
    label: 'Entrar',
    isAuthAction: true,
    buttonVariant: 'outlined',
    severity: 'secondary',
    class: 'menu-auth-mobile-item',
  },
  {
    label: 'Criar Conta',
    isAuthAction: true,
    class: 'menu-auth-mobile-item',
  },
])
</script>

<template>
  <Menubar :model="items" class="app-menubar">
    <template #start>
      <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/images/prime-burger-logo.svg" class="h-10 md:h-12 lg:h-14" alt="PrimeBurger Logo" />
        <span class="menubar-brand-title self-center text-xl font-semibold whitespace-nowrap"
          >PrimeBurger</span
        >
      </RouterLink>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <Button
        v-if="item.isAuthAction"
        as="a"
        fluid
        size="small"
        :label="typeof item.label === 'string' ? item.label : undefined"
        :variant="typeof item.buttonVariant === 'string' ? item.buttonVariant : undefined"
        :severity="typeof item.severity === 'string' ? item.severity : undefined"
        :class="[
          'menubar-auth-button',
          item.label === 'Entrar' ? 'menubar-login-button' : 'menubar-signup-button',
        ]"
        v-bind="props.action"
      />
      <RouterLink v-else-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a
          v-ripple
          class="menubar-item-link flex items-center"
          :href="href"
          v-bind="props.action"
          @click="navigate"
        >
          <span>{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="['pi ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"
          ></i>
        </a>
      </RouterLink>
      <a v-else v-ripple class="menubar-item-link flex items-center" v-bind="props.action">
        <span>{{ item.label }}</span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span
          v-if="item.shortcut"
          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >{{ item.shortcut }}</span
        >
        <i
          v-if="hasSubmenu"
          :class="['pi ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"
        ></i>
      </a>
    </template>
    <template #end>
      <div class="menubar-desktop-actions">
        <Button label="Entrar" variant="outlined" class="menubar-end-button menubar-login-button" />
        <Button label="Criar Conta" class="menubar-end-button menubar-signup-button" />
      </div>
    </template>
  </Menubar>
</template>

<style scoped>
.app-menubar {
  position: relative;
  background-color: var(--color-brown-primary);
  border: 1px solid var(--color-brown-secondary);
  border-radius: 0;
  color: var(--color-beige);
}

.app-menubar :deep(.p-menubar-start),
.app-menubar :deep(.p-menubar-end) {
  color: var(--color-beige);
}

.menubar-brand-title {
  color: var(--color-beige);
}

.app-menubar :deep(.p-menubar-item-content) {
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

.app-menubar :deep(.p-menubar-item-content:hover) {
  background-color: var(--color-brown-secondary);
}

.app-menubar :deep(.p-menubar-item-active > .p-menubar-item-content) {
  background-color: var(--color-brown-secondary);
}

.app-menubar :deep(.menubar-item-link) {
  color: var(--color-beige);
  font-weight: 500;
  transition: color 0.2s ease;
}

.app-menubar :deep(.p-menubar-item-content:hover > .menubar-item-link) {
  color: var(--color-beige);
}

.app-menubar :deep(.menubar-item-link:focus-visible) {
  outline: 2px solid var(--color-beige);
  outline-offset: 2px;
}

.app-menubar :deep(.menubar-end-button.p-button),
.app-menubar :deep(.menubar-auth-button.p-button) {
  border-radius: 9999px;
  font-weight: 600;
}

.app-menubar :deep(.menubar-login-button.p-button) {
  background-color: transparent;
  border-color: var(--color-beige);
  color: var(--color-beige);
}

.app-menubar :deep(.menubar-login-button.p-button:hover) {
  background-color: color-mix(in srgb, var(--color-beige) 12%, transparent);
  border-color: var(--color-beige);
  color: var(--color-beige);
}

.app-menubar :deep(.menubar-signup-button.p-button) {
  background-color: var(--color-beige);
  border-color: var(--color-beige);
  color: var(--color-brown-primary);
}

.app-menubar :deep(.menubar-signup-button.p-button:hover) {
  background-color: color-mix(in srgb, var(--color-beige) 88%, white);
  border-color: color-mix(in srgb, var(--color-beige) 88%, white);
  color: var(--color-brown-primary);
}

.menubar-desktop-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 960px) {
  .menubar-desktop-actions {
    display: none;
  }

  .app-menubar :deep(.menu-auth-mobile-item > .p-menubar-item-content) {
    width: 100%;
    padding-inline: 0.75rem;
  }

  .app-menubar :deep(.menu-auth-mobile-separator) {
    margin-block: 0.5rem;
  }

  .app-menubar :deep(.menubar-auth-button.p-button) {
    justify-content: center;
  }
}

@media (min-width: 961px) {
  .app-menubar {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;
    column-gap: 1.5rem;
  }

  .app-menubar :deep(.p-menubar-start) {
    min-width: 0;
  }

  .app-menubar :deep(.p-menubar-root-list) {
    grid-column: 2;
    justify-self: center;
  }

  .app-menubar :deep(.p-menubar-end) {
    grid-column: 3;
    justify-self: end;
    min-width: 0;
  }

  .app-menubar :deep(.menu-auth-mobile-item),
  .app-menubar :deep(.menu-auth-mobile-separator) {
    display: none;
  }
}
</style>
