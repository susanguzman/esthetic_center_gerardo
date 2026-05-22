import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">

        <p className="footer__quote">
          “Naturalmente bellas”
        </p>

        <div className="footer__info">
          <p>Esthetic Center Gerardo Villalobos</p>
          <p>Manuel Mora, Puntarenas · Costa Rica</p>
        </div>

        <div className="footer__social">
          <a href="https://www.instagram.com/sthetic_center_gv?igsh=NDdscG42Y2tiaDB5&utm_source=qr" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/share/18ePuz9mxf/?mibextid=wwXIfr" target="_blank">Facebook</a>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Todos los derechos reservados</p>

        <p className="footer__signature">
          Diseñado y desarrollado por{" "}
          <span>Susan Guzmán</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer