import { motion } from "framer-motion"
import heroImg from "../../assets/images/Hero/hero1.jpg"
import "./hero.css"

function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero__overlay">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Relájate, renueva tu piel</h1>
          <p>Tratamientos diseñados para tu bienestar</p>

          <a
            href="https://wa.me/50684324541"
            target="_blank"
            className="hero__button"
          >
            Reservar cita
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero