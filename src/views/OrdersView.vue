<script setup lang="ts">
import { Button, Badge, Divider } from 'primevue'
import { useOrdersStore } from '@/stores/orders.store'
import { useRouter } from 'vue-router'
import SectionLayout from '@/components/SectionLayout.vue'
import HeadingH2 from '@/components/HeadingH2.vue'

const orders = useOrdersStore()
const router = useRouter()

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}
</script>

<template>
  <SectionLayout>
    <HeadingH2>Pedidos</HeadingH2>

    <!-- Empty state -->
    <div v-if="orders.orders.length === 0" class="text-center py-20">
      <i class="pi pi-list text-6xl text-brown-secondary mb-4 block opacity-40" />
      <p class="text-xl font-semibold text-brown-secondary mb-2">Nenhum pedido ainda</p>
      <p class="text-sm text-gray-500 mb-6">Seus pedidos aparecerão aqui após finalizar a comanda.</p>
      <Button label="Ver Cardápio" icon="pi pi-arrow-right" @click="router.push('/cardapio')" />
    </div>

    <!-- Orders List -->
    <div v-else class="max-w-2xl mx-auto space-y-4">
      <div
        v-for="order in orders.orders"
        :key="order.id"
        class="order-card rounded-2xl border-2 border-beige overflow-hidden bg-white"
      >
        <!-- Order Header -->
        <div class="flex items-center justify-between px-5 py-3 bg-brown-primary text-beige">
          <div>
            <span class="font-bold text-lg">#{{ order.id }}</span>
            <span class="text-sm ml-3 opacity-80">{{ order.customerName }}</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-xs opacity-70">{{ formatDate(order.createdAt) }}</span>
            <Badge
              :value="orders.STATUS_LABELS[order.status]"
              :severity="orders.STATUS_SEVERITY[order.status] as any"
            />
          </div>
        </div>

        <!-- Order Items -->
        <div class="p-4">
          <div
            v-for="(item, index) in order.items"
            :key="item.product.id"
          >
            <div class="flex items-center gap-3 py-2">
              <img
                :src="item.product.img"
                :alt="item.product.name"
                class="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                style="background-color: var(--color-beige)"
              />
              <div class="flex-1">
                <p class="font-semibold text-brown-primary text-sm">{{ item.product.name }}</p>
                <p class="text-xs text-gray-500">{{ item.quantity }}x R$ {{ item.product.price.toFixed(2).replace('.', ',') }}</p>
              </div>
              <span class="font-bold text-brown-primary text-sm">
                R$ {{ (item.product.price * item.quantity).toFixed(2).replace('.', ',') }}
              </span>
            </div>
            <Divider v-if="index < order.items.length - 1" class="!my-0" />
          </div>
        </div>

        <!-- Order Footer -->
        <div class="flex items-center justify-between px-5 py-3 bg-beige">
          <div class="flex items-center gap-2">
            <!-- Status progress -->
            <div class="status-steps flex items-center gap-1">
              <span
                v-for="step in (['pendente', 'preparando', 'pronto', 'entregue'] as const)"
                :key="step"
                class="status-dot"
                :class="{
                  'status-dot--active': order.status === step,
                  'status-dot--done': ['pendente', 'preparando', 'pronto', 'entregue'].indexOf(order.status) > ['pendente', 'preparando', 'pronto', 'entregue'].indexOf(step),
                }"
                :title="orders.STATUS_LABELS[step]"
              />
            </div>
            <span class="text-xs text-brown-secondary font-medium">
              {{ orders.STATUS_LABELS[order.status] }}
            </span>
          </div>
          <span class="font-extrabold text-brown-primary">
            R$ {{ order.total.toFixed(2).replace('.', ',') }}
          </span>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<style scoped>
.order-card {
  transition: box-shadow 0.2s ease;
}

.order-card:hover {
  box-shadow: 0 8px 20px -4px rgba(62, 39, 35, 0.12);
}

.status-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background-color: rgba(93, 64, 55, 0.25);
  transition: background-color 0.3s;
}

.status-dot--active {
  background-color: var(--color-brown-primary);
  transform: scale(1.2);
}

.status-dot--done {
  background-color: #22c55e;
}
</style>
