import { useState } from "react"
import "./navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__container">
        <h2 className="navbar__logo">Esthetic Center Gerardo Villalobos</h2>

        {/* Desktop */}
        <nav className="navbar__links">
          <a href="#hero">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#gallery">Galería</a>
          <a href="#results">Resultados</a>
          <a href="#contact">Contacto</a>
        </nav>

        <a
          href="https://wa.me/50684324541"
          target="_blank"
          className="navbar__cta"
        >
          Reservar
        </a>

        {/* Botón hamburguesa */}
        <button
          className="navbar__menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
  <div className="navbar__mobile">

    <button
      className="navbar__menu"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? "✕" : "☰"}
    </button>

    <a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a>
    <a href="#services" onClick={() => setIsOpen(false)}>Servicios</a>
    <a href="#gallery" onClick={() => setIsOpen(false)}>Galería</a>
    <a href="#results" onClick={() => setIsOpen(false)}>Resultados</a>
    <a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a>

    <a
      href="https://wa.me/50684324541"
      target="_blank"
      className="navbar__mobile-cta"
    >
      Reservar cita
    </a>
  </div>
)}
    </header>
  )
}

export default Navbar