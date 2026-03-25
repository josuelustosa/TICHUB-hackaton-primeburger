import type { Category } from './category.type'

export type FeaturedProducts = {
  id: number
  name: string
  description: string
  price: number
  img: string
  favorite: boolean
  category: Category
}
