import type { HeroImage } from '@/types/hero-image.type'

import americanBurgerImg from '@/assets/images/products/american-burger.png'
import supremoImg from '@/assets/images/products/supremo.png'
import smashBaconImg from '@/assets/images/products/smash-bacon.png'

export const HERO_IMAGES: HeroImage[] = [
  {
    id: 1,
    itemImageSrc: supremoImg,
    alt: 'Supremo - Premium & Gourmet',
    title: 'Supremo',
    subtitle: 'O mais pedido da casa',
    cta: 'Ver no Cardápio',
  },
  {
    id: 2,
    itemImageSrc: americanBurgerImg,
    alt: 'American Burger - Clássico da Casa',
    title: 'American Burger',
    subtitle: 'Blend costela 200g com bacon crocante',
    cta: 'Pedir Agora',
  },
  {
    id: 3,
    itemImageSrc: smashBaconImg,
    alt: 'Smash Bacon - Combinação Clássica',
    title: 'Smash Bacon',
    subtitle: 'Combinação clássica que nunca decepciona',
    cta: 'Ver no Cardápio',
  },
]
