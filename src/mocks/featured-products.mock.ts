import type { FeaturedProducts } from '@/types/featured-products.type'
import { CATEGORIES_PRODUCTS } from './categories-products.mock'

import americanBurgerImg from '@/assets/images/products/american-burger.png'
import supremoImg from '@/assets/images/products/supremo.png'
import smashBaconImg from '@/assets/images/products/smash-bacon.png'

export const FEATURED_PRODUCTS: FeaturedProducts[] = [
  {
    id: 1,
    name: 'American Burger',
    description:
      'Pão com gergelim, blend costela 200g, maionese da casa, cheddar, bacon crocante, picles agridoce, tomate e alface fresca.',
    price: 48,
    img: americanBurgerImg,
    favorite: false,
    category: CATEGORIES_PRODUCTS[0]!,
    badge: 'Mais Pedido',
  },
  {
    id: 2,
    name: 'Supremo',
    description:
      'Pão brioche, 2 blends de costela 120g cada, incríveis 200g de bacon, 6 fatias de cheddar derretido e maionese da casa. Para os fortes!',
    price: 52,
    img: supremoImg,
    favorite: true,
    category: CATEGORIES_PRODUCTS[1]!,
    badge: 'Premium',
  },
  {
    id: 3,
    name: 'Smash Bacon',
    description:
      'Pão brioche, blend de costela 70g smashado, bacon crocante e 1 fatia de cheddar americano. Combinação clássica.',
    price: 22,
    img: smashBaconImg,
    favorite: true,
    category: CATEGORIES_PRODUCTS[1]!,
  },
]

export const ALL_PRODUCTS: FeaturedProducts[] = [
  ...FEATURED_PRODUCTS,
  {
    id: 4,
    name: 'Double Smash',
    description:
      'Dois smash patties de 70g cada, duplo cheddar, pickles, cebola caramelizada, mostarda artesanal e pão australiano tostado.',
    price: 38,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
    favorite: false,
    category: CATEGORIES_PRODUCTS[0]!,
  },
  {
    id: 5,
    name: 'BBQ Smoky',
    description:
      'Pão australiano, blend angus 180g, molho barbecue defumado artesanal, cebola crispy, jalapeños, cheddar e alface crocante.',
    price: 44,
    img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80',
    favorite: false,
    category: CATEGORIES_PRODUCTS[0]!,
    badge: 'Novidade',
  },
  {
    id: 6,
    name: 'Truffle Prime',
    description:
      'Pão brioche premium, blend wagyu 180g, aioli de trufas negras, rúcula selvagem, parmesão ralado e tomate seco.',
    price: 68,
    img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80',
    favorite: false,
    category: CATEGORIES_PRODUCTS[1]!,
    badge: 'Chef Especial',
  },
  {
    id: 7,
    name: 'Veggie Burger',
    description:
      'Pão integral, hambúrguer de grão-de-bico artesanal, cream cheese de ervas, tomate, alface, pepino e molho de iogurte.',
    price: 35,
    img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80',
    favorite: false,
    category: CATEGORIES_PRODUCTS[0]!,
  },
  {
    id: 8,
    name: 'Fritas Crocantes',
    description:
      'Porção generosa de batatas fritas crocantes, temperadas com sal e ervas finas, acompanhadas de molho especial da casa.',
    price: 18,
    img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80',
    favorite: false,
    category: CATEGORIES_PRODUCTS[0]!,
  },
  {
    id: 9,
    name: 'Onion Rings',
    description:
      'Anéis de cebola empanados na massa especial, fritos na hora, crocantes por fora e macios por dentro. Irresistíveis!',
    price: 20,
    img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80',
    favorite: false,
    category: CATEGORIES_PRODUCTS[0]!,
  },
  {
    id: 10,
    name: 'Milk Shake Chocolate',
    description:
      'Shake cremoso de chocolate belga com sorvete artesanal, calda de chocolate e chantilly. Tamanho 500ml.',
    price: 24,
    img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80',
    favorite: false,
    category: CATEGORIES_PRODUCTS[2]!,
  },
  {
    id: 11,
    name: 'Refrigerante',
    description: 'Lata 350ml gelada. Escolha entre Coca-Cola, Guaraná Antarctica, Sprite ou Fanta.',
    price: 8,
    img: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80',
    favorite: false,
    category: CATEGORIES_PRODUCTS[2]!,
  },
  {
    id: 12,
    name: 'Brownie com Sorvete',
    description:
      'Brownie quentinho de chocolate meio amargo, com sorvete de creme artesanal e calda quente de chocolate.',
    price: 22,
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
    favorite: false,
    category: CATEGORIES_PRODUCTS[3]!,
  },
]
