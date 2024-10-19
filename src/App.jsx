import './App.css'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Information from './components/Information'
import NavBarMovil from './components/NavBarMovil'
import Home from './pages/Home'
import Metodology from './pages/Metodology'

function App() {

  return (
    <div>
      <NavBarMovil />
      <div>
        <Home />
        <Information/>
        <Metodology />
        <Contact />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default App
