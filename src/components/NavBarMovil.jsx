import { useState } from "react"
import './NavBarMovil.css'
import LinkNav from "./LinkNav"

const NavBarMovil = () => {

  const [showMenu, setShowMenu] = useState(false)


  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <div>
      <section className="relative">
        <nav className="h-14">
          <menu className="">
            <button className="ml-2 h-7 flex flex-col justify-evenly" onClick={handleShowMenu}>
              <div className="w-7 h-1 bg-black"></div>
              <div className="w-7 h-1 bg-black"></div>
              <div className="w-7 h-1 bg-black"></div>
            </button>
            {showMenu ?
              <section className="flex flex-col items-center">
              <ul className='transition-all duration-500 ease-in-out mt-7 w-full absolute shadow-md text-center border-t-2 border-black bg-white z-10'>
                  <LinkNav nameLink="Servicios" />
                  <LinkNav nameLink="Proyectos" />
                  <LinkNav nameLink="Contacto" />
                </ul>
              </section>

              :
              ""
            }
          </menu>
        </nav>
      </section>

    </div>
  )
}

export default NavBarMovil