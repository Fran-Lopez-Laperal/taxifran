import './App.css'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Information from './components/Information'
import NavBarMovil from './components/NavBarMovil'
import Home from './pages/Home'
import Metodology from './pages/Metodology'
import Whatsapp from './pages/Whatsapp'
import { useEffect, useState } from 'react'
import NavBarDesktop from './components/NavBarDesktop'

function App() {

  const [showNavMovile, setShowNavMovile] = useState(false)

  useEffect(() => {
    const responsiveMovil = () =>
      window.innerWidth < 420
        ? setShowNavMovile(true)
        : setShowNavMovile(false);
    responsiveMovil();
    window.addEventListener("resize", () => responsiveMovil());


  }, []);


  return (
    <div>
      <main>

      </main>
      {showNavMovile ? (
        <NavBarMovil />
      )
        :
        (
          <NavBarDesktop/>
        )}

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
