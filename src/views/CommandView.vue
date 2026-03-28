<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, InputNumber, Divider, Dialog } from 'primevue'
import { useCartStore } from '@/stores/cart.store'
import { useOrdersStore } from '@/stores/orders.store'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import SectionLayout from '@/components/SectionLayout.vue'
import HeadingH2 from '@/components/HeadingH2.vue'

const cart = useCartStore()
const orders = useOrdersStore()
const router = useRouter()
const toast = useToast()

const showConfirmDialog = ref(false)
const customerName = ref('')

const canFinalize = computed(() => cart.items.length > 0 && customerName.value.trim().length >= 2)

const removeItem = (productId: number) => {
  cart.removeItem(productId)
}

const updateQty = (productId: number, qty: number | null) => {
  cart.updateQuantity(productId, qty ?? 1)
}

const openConfirm = () => {
  showConfirmDialog.value = true
}

const finalizeOrder = () => {
  if (!canFinalize.value) return
  const order = orders.createOrder(cart.items, cart.totalPrice, customerName.value.trim())
  cart.clearCart()
  showConfirmDialog.value = false
  toast.add({
    severity: 'success',
    summary: `Pedido #${order.id} enviado!`,
    detail: 'Acompanhe o status em Pedidos.',
    life: 4000,
  })
  router.push('/pedidos')
}
</script>

<template>
  <SectionLayout>
    <HeadingH2>Minha Comanda</HeadingH2>

    <!-- Empty cart -->
    <div v-if="cart.items.length === 0" class="text-center py-20">
      <i class="pi pi-shopping-cart text-6xl text-brown-secondary mb-4 block opacity-40" />
      <p class="text-xl font-semibold text-brown-secondary mb-2">Sua comanda está vazia</p>
      <p class="text-sm text-gray-500 mb-6">Adicione itens do cardápio para começar!</p>
      <Button label="Ver Cardápio" icon="pi pi-arrow-right" @click="router.push('/cardapio')" />
    </div>

    <!-- Cart Items -->
    <div v-else class="max-w-2xl mx-auto">
      <div class="cart-container rounded-2xl border-2 border-beige overflow-hidden">
        <div v-for="(item, index) in cart.items" :key="item.product.id">
          <div class="cart-item flex gap-4 p-4 items-center">
            <img
              :src="item.product.img"
              :alt="item.product.name"
              class="w-20 h-20 object-contain rounded-lg flex-shrink-0"
              style="background-color: var(--color-beige)"
            />
            <div class="flex-1 min-w-0">
              <h3 class="font-bold text-brown-primary text-sm sm:text-base truncate">
                {{ item.product.name }}
              </h3>
              <p class="text-xs text-brown-secondary mb-2">{{ item.product.category.name }}</p>
              <div class="flex items-center gap-3">
                <InputNumber
                  :modelValue="item.quantity"
                  @update:modelValue="(v) => updateQty(item.product.id, v)"
                  showButtons
                  buttonLayout="horizontal"
                  :min="1"
                  :max="10"
                  size="small"
                >
                  <template #incrementicon><span class="pi pi-plus" /></template>
                  <template #decrementicon><span class="pi pi-minus" /></template>
                </InputNumber>
                <Button
                  icon="pi pi-trash"
                  text
                  severity="danger"
                  size="small"
                  aria-label="Remover"
                  @click="removeItem(item.product.id)"
                />
              </div>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="font-extrabold text-brown-primary">
                R$ {{ (item.product.price * item.quantity).toFixed(2).replace('.', ',') }}
              </p>
              <p class="text-xs text-gray-400">
                R$ {{ item.product.price.toFixed(2).replace('.', ',') }} cada
              </p>
            </div>
          </div>
          <Divider v-if="index < cart.items.length - 1" class="!my-0" />
        </div>
      </div>

      <!-- Summary -->
      <div class="bg-brown-primary rounded-2xl p-5 mt-4 text-beige">
        <div class="flex justify-between mb-2 text-sm">
          <span
            >Subtotal ({{ cart.totalItems }} {{ cart.totalItems === 1 ? 'item' : 'itens' }})</span
          >
          <span>R$ {{ cart.totalPrice.toFixed(2).replace('.', ',') }}</span>
        </div>
        <div class="flex justify-between mb-4 text-sm">
          <span>Taxa de serviço</span>
          <span class="text-green-300">Grátis</span>
        </div>
        <Divider class="!border-brown-secondary !my-3" />
        <div class="flex justify-between font-extrabold text-lg">
          <span>Total</span>
          <span>R$ {{ cart.totalPrice.toFixed(2).replace('.', ',') }}</span>
        </div>
      </div>

      <!-- Customer name + Finalize -->
      <div class="mt-4 flex flex-col sm:flex-row gap-3">
        <input
          v-model="customerName"
          type="text"
          placeholder="Seu nome (obrigatório)"
          class="customer-input flex-1"
          maxlength="40"
        />
        <Button
          label="Finalizar Pedido"
          icon="pi pi-check"
          severity="success"
          :disabled="!canFinalize"
          class="finalize-btn"
          @click="openConfirm"
        />
      </div>

      <!-- Clear cart -->
      <div class="text-center mt-3">
        <Button
          label="Limpar Comanda"
          icon="pi pi-trash"
          text
          severity="danger"
          size="small"
          @click="cart.clearCart()"
        />
      </div>
    </div>
  </SectionLayout>

  <!-- Confirm Dialog -->
  <Dialog
    v-model:visible="showConfirmDialog"
    header="Confirmar Pedido"
    modal
    :style="{ width: '90vw', maxWidth: '400px' }"
    :draggable="false"
  >
    <p class="mb-3">
      Confirmar pedido para <strong>{{ customerName }}</strong
      >?
    </p>
    <div class="space-y-1 mb-4">
      <div v-for="item in cart.items" :key="item.product.id" class="flex justify-between text-sm">
        <span>{{ item.quantity }}x {{ item.product.name }}</span>
        <span class="font-semibold"
          >R$ {{ (item.product.price * item.quantity).toFixed(2).replace('.', ',') }}</span
        >
      </div>
    </div>
    <Divider />
    <div class="flex justify-between font-bold text-base mb-4">
      <span>Total</span>
      <span>R$ {{ cart.totalPrice.toFixed(2).replace('.', ',') }}</span>
    </div>
    <div class="flex gap-2 justify-end">
      <Button label="Cancelar" severity="secondary" outlined @click="showConfirmDialog = false" />
      <Button label="Confirmar" icon="pi pi-check" severity="success" @click="finalizeOrder" />
    </div>
  </Dialog>
</template>

<style scoped>
.cart-container {
  background: white;
}

.customer-input {
  padding: 0.65rem 1rem;
  border: 2px solid var(--color-beige);
  border-radius: 0.75rem;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}

.customer-input:focus {
  border-color: var(--color-brown-secondary);
}

.finalize-btn {
  border-radius: 0.75rem !important;
  font-weight: 700 !important;
  white-space: nowrap;
}
</style>
