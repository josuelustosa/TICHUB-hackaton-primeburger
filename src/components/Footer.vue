<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="../assets/images/prime-burger-logo.svg" class="h-10" alt="PrimeBurger Logo" />
        <span class="footer-brand-name">PrimeBurger</span>
      </div>
      <p class="footer-tagline">Os melhores burgers artesanais da cidade. Feitos com amor e os melhores ingredientes.</p>
      <div class="footer-links">
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/cardapio">Cardápio</RouterLink>
        <RouterLink to="/minha-comanda">Comanda</RouterLink>
        <RouterLink to="/pedidos">Pedidos</RouterLink>
      </div>
      <p class="footer-copy">© 2025 PrimeBurger. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-brown-primary);
  color: var(--color-beige);
  padding: 2.5rem 1.5rem 1.5rem;
  margin-top: auto;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-beige);
}

.footer-tagline {
  font-size: 0.85rem;
  opacity: 0.7;
  max-width: 400px;
  line-height: 1.5;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-links a {
  color: var(--color-beige);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.85;
  transition: opacity 0.2s;
}

.footer-links a:hover {
  opacity: 1;
  text-decoration: underline;
}

.footer-copy {
  font-size: 0.75rem;
  opacity: 0.5;
  margin-top: 0.5rem;
}
</style>
