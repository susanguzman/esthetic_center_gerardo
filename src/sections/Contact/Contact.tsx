import { motion } from "framer-motion"
import "./contact.css"

function Contact() {

  return (

    <section
      id="contact"
      className="contact"
    >

      {/* INTRO */}

      <div className="contact__intro">

        <p>CONTÁCTANOS</p>

        <h2>
          Estamos listos para ayudarte
          a sentirte y verte mejor
        </h2>

        <span>
          Agenda tu cita y disfruta
          de una experiencia pensada
          para tu bienestar
        </span>

      </div>

      {/* CONTENT */}

      <div className="contact__container">

        {/* INFO */}

        <motion.div
          className="contact__info"
          initial={{
            opacity: 0,
            x: -40
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6
          }}
          viewport={{ once: true }}
        >

          <div className="contact__badge">
            Atención personalizada
          </div>

          <h3>
            Esthetic Center
            Gerardo Villalobos
          </h3>

          {/* LOCATION */}

          <div className="contact__card">

            <span>📍 Ubicación</span>

            <p>
              Manuel Mora,
              Barranca, Puntarenas
            </p>

          </div>

          {/* PHONE */}

          <div className="contact__card">

            <span>📞 Teléfono</span>

            <p>
              +506 8432 4541
            </p>

          </div>

          {/* SCHEDULE */}

          <div className="contact__schedule">

            <h4>
              Horario de atención
            </h4>

            <ul>

              <li>
                <span>Lunes</span>
                <span>10:00 a.m. – 6:00 p.m.</span>
              </li>

              <li>
                <span>Martes</span>
                <span>10:00 a.m. – 6:00 p.m.</span>
              </li>

              <li>
                <span>Miércoles</span>
                <span>10:00 a.m. – 6:00 p.m.</span>
              </li>

              <li>
                <span>Jueves</span>
                <span>10:00 a.m. – 6:00 p.m.</span>
              </li>

              <li>
                <span>Viernes</span>
                <span>10:00 a.m. – 6:00 p.m.</span>
              </li>

              <li>
                <span>Sábado</span>
                <span>10:00 a.m. – 2:00 p.m.</span>
              </li>

              <li className="closed">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>

            </ul>

            <p className="contact__note">
              * Horarios sujetos a cambios
              en días feriados.
            </p>

          </div>

          {/* BUTTON */}

          <a
            href="https://wa.me/50684324541"
            target="_blank"
            rel="noreferrer"
            className="contact__button"
          >
            Reservar por WhatsApp
          </a>

        </motion.div>

        {/* MAP */}

        <motion.div
          className="contact__map"
          initial={{
            opacity: 0,
            x: 40
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6
          }}
          viewport={{ once: true }}
        >

          <div className="contact__map-overlay">

            <span>
              Te esperamos
            </span>

          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.1883728630321!2d-84.72764237281704!3d9.974913765662679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0310017f82645%3A0x57e1705e1c68891f!2sSthetic%20Center%20Gerardo%20Villalobos!5e0!3m2!1ses-419!2scr!4v1777328650299!5m2!1ses-419!2scr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contact__iframe"
          />

        </motion.div>

      </div>

    </section>
  )
}

export default Contact