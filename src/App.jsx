import './App.css'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Information from './components/Information'
import Home from './pages/Home'
import Metodology from './pages/Metodology'
import Whatsapp from './pages/Whatsapp'
import { useEffect, useState } from 'react'
import NavBarDesktop from './components/NavBarDesktop'
import NavBarMovil from './components/NavBarMovil'

function App() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const responsiveMovil = () => window.innerWidth > 480 ? setShowNav(true) : setShowNav(false);
    responsiveMovil();
    window.addEventListener("resize", () => responsiveMovil())

  })

  return (
    <div>
      <main>
      {showNav ?
        <NavBarDesktop /> : <NavBarMovil />}
      </main>
      <div>
        <Home />
        <Information />
        <Metodology />
        <Contact />
        <Whatsapp />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default App
