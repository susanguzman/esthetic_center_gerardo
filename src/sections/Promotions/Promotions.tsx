import { useRef } from "react"
import { motion } from "framer-motion"

import { promotions } from "../../data/promotions"

import "./promotions.css"

function Promotions() {

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (
    direction: "left" | "right"
  ) => {

    if (scrollRef.current) {

      const scrollAmount = 320

      scrollRef.current.scrollBy({
        left:
          direction === "left"
            ? -scrollAmount
            : scrollAmount,

        behavior: "smooth"
      })
    }
  }

  return (

    <section
      className="promotions"
      id="promotions"
    >

      {/* HEADER */}

      <div className="promotions__intro">

        <p>OFERTAS ESPECIALES</p>

        <h2>
          Momentos perfectos
          para consentirte
        </h2>

        <span>
          Descubre promociones creadas
          para que disfrutes más por menos
        </span>

      </div>

      {/* CAROUSEL */}

      <div className="carousel-wrapper">

        <button
          className="carousel-btn left"
          onClick={() => scroll("left")}
        >
          ‹
        </button>

        <div
          className="carousel"
          ref={scrollRef}
        >

          {promotions.map((promo, i) => (

            <motion.div
              key={promo.id}
              className="promo-card"
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: i * 0.1
              }}
              viewport={{ once: true }}
            >

              {/* IMAGE */}

              <div className="promo-image">

                <img
                  src={promo.image}
                  alt={promo.title}
                />

              </div>

              {/* CONTENT */}

              <div className="promo-content">

                <div className="promo-badge">
                  Promoción
                </div>

                <h3>{promo.title}</h3>

                <p>
                  {promo.description}
                </p>

                <div className="promo-prices">

                  {promo.oldPrice && (
                    <span className="old">
                      {promo.oldPrice}
                    </span>
                  )}

                  <span className="new">
                    {promo.price}
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        <button
          className="carousel-btn right"
          onClick={() => scroll("right")}
        >
          ›
        </button>

      </div>

    </section>
  )
}

export default Promotions