import promo1 from "../assets/images/Promotions/promo1.webp"
import promo2 from "../assets/images/Promotions/promo2.jpg"
import promo3 from "../assets/images/Promotions/promo3.jpg"

export type Promotion = {
  id: number
  title: string
  description: string
  price: string
  oldPrice?: string
  image: string
}

export const promotions: Promotion[] = [
  {
    id: 1,
    title: "Limpieza Facial Premium",
    description: "Incluye hidratación profunda + mascarilla especializada",
    price: "₡15,000",
    oldPrice: "₡20,000",
    image: promo1
  },
  {
    id: 2,
    title: "Masaje Relajante",
    description: "45 minutos con piedras calientes",
    price: "₡12,000",
    image: promo2
  },
  {
    id: 3,
    title: "Combo Corporal",
    description: "Reducción + reafirmación + exfoliación",
    price: "₡25,000",
    oldPrice: "₡30,000",
    image: promo3
  }
]