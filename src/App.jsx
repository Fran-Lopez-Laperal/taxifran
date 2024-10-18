import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Info from './components/info'
import NavBarMovil from './components/NavBarMovil'
import Steps from './components/Steps'

function App() {

  return (
    <div>
      <NavBarMovil />
      <div>
        <Home />
        <Info/>
        <Steps/>
        <Contact/>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default App
