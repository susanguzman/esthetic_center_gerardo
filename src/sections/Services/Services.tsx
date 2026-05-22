import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import "./services.css"

import { facialServices, corporalServices, depilatoryServices  } from "../../data/services"

const data = {
  facial: facialServices,
  corporal: corporalServices,
  depilatorio: depilatoryServices
}

function Services() {

  const [active, setActive] =
    useState<keyof typeof data>("facial")

  return (
    <section className="services" id="services">

      <div className="services__intro">

        <p>TRATAMIENTOS</p>

        <h2>
          Tu bienestar comienza
          con el cuidado que mereces
        </h2>

      </div>

      {/* SELECTOR */}

      <div className="services__tabs">

        <button
          className={active === "facial" ? "active" : ""}
          onClick={() => setActive("facial")}
        >
          Faciales
        </button>

        <button
          className={active === "corporal" ? "active" : ""}
          onClick={() => setActive("corporal")}
        >
          Corporales
        </button>

        <button
          className={active === "depilatorio" ? "active" : ""}
          onClick={() => setActive("depilatorio")}
        >
          Depilatorios
        </button>

      </div>

      {/* GRID */}

      <AnimatePresence mode="wait">

        <motion.div
          key={active}
          className="services__grid"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.35 }}
        >

          {data[active].map((service, i) => (

            <motion.div
              key={service.id}
              className="service__card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >

              <div className="service__top">

                <span>{service.duration}</span>

                <h3>{service.title}</h3>

              </div>

              <p>{service.description}</p>

              <div className="service__price">
                ₡{service.price.toLocaleString()}
              </div>

            </motion.div>

          ))}

        </motion.div>

      </AnimatePresence>

    </section>
  )
}

export default Services