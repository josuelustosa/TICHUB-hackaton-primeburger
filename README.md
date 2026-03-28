# PrimeBurger — Hamburgueria Artesanal

Aplicação web desenvolvida durante o **Hackathon TicHub**, simulando o sistema de pedidos de uma hamburgueria artesanal. O projeto foi construído com **Vue 3**, **TypeScript**, **PrimeVue** e **Tailwind CSS**.

---

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Rotas](#rotas)
- [Componentes](#componentes)

---

## Visão Geral

O **PrimeBurger** é uma SPA (Single Page Application) voltada para o gerenciamento de pedidos de uma hamburgueria. Na versão atual (MVP), o sistema conta com:

- Carrossel de destaque dos produtos na página inicial
- Listagem de produtos em destaque com ação de favoritar e adicionar à comanda
- Categorias de produtos
- Navegação entre as páginas via menu responsivo
- Estrutura base para as páginas de Cardápio, Comanda e Pedidos

---

## Tecnologias

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [Vue 3](https://vuejs.org/) | ^3.5 | Framework principal |
| [TypeScript](https://www.typescriptlang.org/) | ~5.9 | Tipagem estática |
| [Vue Router](https://router.vuejs.org/) | ^5.0 | Roteamento SPA |
| [Pinia](https://pinia.vuejs.org/) | ^3.0 | Gerenciamento de estado |
| [PrimeVue](https://primevue.org/) | ^4.5 | Biblioteca de componentes UI |
| [PrimeIcons](https://primeng.org/icons) | ^7.0 | Ícones |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2 | Estilização utilitária |
| [Vite](https://vitejs.dev/) | ^7.3 | Bundler e servidor de desenvolvimento |

---

## Estrutura do Projeto

```
src/
├── assets/
│   └── images/
│       ├── products/          # Imagens dos produtos (american-burger, supremo, smash-bacon)
│       └── prime-burger-logo.svg
├── components/
│   ├── Home/
│   │   ├── FeaturedProducts.vue   # Cards dos produtos em destaque
│   │   ├── HeroSectionCarousel.vue # Carrossel principal (Galleria)
│   │   └── ProductCategory.vue    # Seção de categorias
│   ├── HeadingH2.vue              # Componente de título reutilizável
│   ├── NavBar.vue                 # Barra de navegação responsiva
│   └── SectionLayout.vue          # Layout wrapper de seções
├── mocks/
│   ├── categories-products.mock.ts
│   ├── featured-products.mock.ts
│   └── hero-images.mock.ts
├── router/
│   └── index.ts                   # Configuração das rotas
├── stores/
│   └── index.ts                   # Base das stores Pinia
├── types/
│   ├── category.type.ts
│   ├── featured-products.type.ts
│   └── hero-image.type.ts
├── views/
│   ├── HomeView.vue               # Página inicial
│   ├── MenuView.vue               # Cardápio
│   ├── CommandView.vue            # Minha Comanda
│   └── OrdersView.vue             # Pedidos
├── App.vue
└── main.ts
```

---

## Pré-requisitos

- **Node.js** `^20.19.0` ou `>=22.12.0`
- **npm** `>=10`

---

## Instalação e Execução

**1. Clone o repositório**
```bash
git clone https://github.com/seu-usuario/tichub-hackaton-primeburger.git
cd tichub-hackaton-primeburger
```

**2. Instale as dependências**
```bash
npm install
```

**3. Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` por padrão.

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot-reload |
| `npm run build` | Gera o build de produção com type-check |
| `npm run preview` | Pré-visualiza o build de produção localmente |
| `npm run type-check` | Verifica os tipos TypeScript com `vue-tsc` |
| `npm run lint` | Executa o linter (oxlint + eslint) com auto-fix |
| `npm run format` | Formata o código com Prettier |

---

## Rotas

| Caminho | Nome | View |
|---|---|---|
| `/` | home | `HomeView.vue` |
| `/cardapio` | Cardápio | `MenuView.vue` |
| `/minha-comanda` | Minha Comanda | `CommandView.vue` |
| `/pedidos` | Pedidos | `OrdersView.vue` |
| `/*` | — | Redireciona para `/` |

---

## Componentes

### `NavBar.vue`
Barra de navegação responsiva construída com o `Menubar` do PrimeVue. Em desktop exibe os botões de autenticação no lado direito; em mobile, os itens aparecem no menu hambúrguer.

### `HeroSectionCarousel.vue`
Carrossel automático usando o componente `Galleria` do PrimeVue, exibindo os produtos em destaque com indicadores de navegação estilizados.

### `FeaturedProducts.vue`
Grade responsiva de cards de produtos com:
- Imagem, nome, categoria e preço
- Controle de quantidade com `InputNumber`
- Ação de adicionar à comanda
- Ação de favoritar/desfavoritar

### `ProductCategory.vue`
Seção de categorias disponíveis: Clássicos da Casa, Premium & Gourmet, Bebidas e Sobremesas.

---

## Observações

- O tema do PrimeVue está configurado com o preset **Aura** no modo claro. O modo escuro pode ser ativado adicionando a classe `.my-app-dark` ao elemento `<html>`.
- Os dados dos produtos são atualmente servidos via **mocks** estáticos, sem integração com backend.
- A lógica de detalhes do produto (modal) está planejada para uma próxima iteração do MVP.

---

Feito durante o Hackathon TicHub.

