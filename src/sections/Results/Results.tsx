import { useState } from "react"
import { motion } from "framer-motion"

import "./results.css"

// IMAGES
import before1 from "../../assets/images/Results/before1.jpeg"
import after1 from "../../assets/images/Results/after1.jpeg"

type Result = {
  before: string
  after: string
  text: string
}

const results: Result[] = [
  {
    before: before1,
    after: after1,

    text:
      "Limpieza facial profunda para ayudar a disminuir la grasa en la piel y mejorar la textura."
  }
]

function ResultCard({
  before,
  after,
  text
}: Result) {

  const [position, setPosition] = useState(50)

  return (

    <div className="result-card">

      <div className="result-image">

        {/* AFTER */}

        <img
          src={after}
          alt="Después"
          className="after"
        />

        {/* BEFORE */}

        <div
          className="before-wrapper"
          style={{
            width: `${position}%`
          }}
        >

          <img
            src={before}
            alt="Antes"
            className="before"
          />

        </div>

        {/* LINE */}

        <div
          className="divider"
          style={{
            left: `${position}%`
          }}
        >

          <div className="divider-button">
            ↔
          </div>

        </div>

        {/* LABELS */}

        <div className="label before-label">
          Antes
        </div>

        <div className="label after-label">
          Después
        </div>

        {/* SLIDER */}

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) =>
            setPosition(
              Number(e.target.value)
            )
          }
          className="slider"
        />

      </div>

      <p className="result-text">
        {text}
      </p>

    </div>

  )
}

function Results() {

  return (

    <section
      className="results"
      id="results"
    >

      {/* INTRO */}

      <div className="results__intro">

        <p>
          ANTES Y DESPUÉS
        </p>

        <h2>
          Resultados que reflejan
          el cuidado y dedicación
          en cada tratamiento
        </h2>

        <span>
          Desliza para descubrir el cambio
        </span>

      </div>

      {/* RESULTS */}

      <div className="results__grid">

        {results.map((result, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 40
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              delay: index * 0.2
            }}

            viewport={{
              once: true
            }}
          >

            <ResultCard
              {...result}
            />

          </motion.div>

        ))}

      </div>

    </section>

  )
}

export default Results