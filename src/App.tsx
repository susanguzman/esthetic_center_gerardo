import Navbar from "./components/layout/Navbar"
import Hero from "./sections/Hero/Hero"
import Promotions from "./sections/Promotions/promotions"
import Services from "./sections/Services/Services"
import Gallery from "./sections/Gallery/Gallery"
import Results from "./sections/Results/Results"
import Contact from "./sections/Contact/Contact"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Promotions />
        <Services />
        <Gallery />
        <Results />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App