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
