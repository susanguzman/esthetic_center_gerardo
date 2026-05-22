import { motion } from "framer-motion"
import "./gallery.css"

import img1 from "../../assets/images/Gallery/space4.jpeg"
import img2 from "../../assets/images/Gallery/space2.jpeg"
import img3 from "../../assets/images/Gallery/space3.jpeg"
import img4 from "../../assets/images/Gallery/space1.jpeg"

const images = [img1, img2, img3, img4]

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <div className="gallery__header">
        <p>NUESTRO ESPACIO</p>
        <h2>Un lugar pensado para tu bienestar</h2>
      </div>

      <div className="gallery__masonry">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={`gallery__card card-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
          >
            <img src={img} alt="Centro estético" />
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Gallery