import type { HeroImage } from '@/types/hero-image.type'

import americanBurgerImg from '@/assets/images/products/american-burger.png'
import supremoImg from '@/assets/images/products/supremo.png'
import smashBaconImg from '@/assets/images/products/smash-bacon.png'

export const HERO_IMAGES: HeroImage[] = [
  {
    id: 1,
    itemImageSrc: americanBurgerImg,
    alt: 'American Burger',
  },
  {
    id: 2,
    itemImageSrc: supremoImg,
    alt: 'Supremo',
  },
  {
    id: 3,
    itemImageSrc: smashBaconImg,
    alt: 'Smash Bacon',
  },
]
