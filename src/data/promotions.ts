import promo1 from "../assets/images/Promotions/promo1.webp"
import promo2 from "../assets/images/Promotions/promo2.jpg"
import promo3 from "../assets/images/Promotions/promo3.jpg"
import promo4 from "../assets/images/Promotions/promo4.webp"

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
    title: "Limpieza Facial",
    description: "Con regalía, luces de rejuvenecimiento facial",
    price: "₡15,000",
    oldPrice: "₡22,000",
    image: promo1
  },
  {
    id: 2,
    title: "Masaje Relajante",
    description: "Exfoliación e hidratación de espalda",
    price: "₡20,000",
    oldPrice: "₡30,000",
    image: promo2
  },
  {
    id: 3,
    title: "Combo Corporal",
    description: "Masaje relajante + exfoliación de espalda e hidratación + rejuvenecimiento en manos con colágeno",
    price: "₡25,000",
    oldPrice: "₡43,000",
    image: promo3
  },
  {
    id: 4,
    title: "Paquete Reduce de tallas ",
    description: "Masaje reductor por zona + 6 reductores masajes por zona + 6 enzimas lipolíticas + 6 carboxiterapias + 6 ultra-cabitación",
    price: "₡100,000",
    oldPrice: "₡180,000",
    image: promo4
  },

  
]