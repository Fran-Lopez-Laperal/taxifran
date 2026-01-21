import { useState } from "react";
import LinkNav from "./LinkNav";
import logo from '../assets/images/LOGO-TAXI.png'
import { Link as Scroll } from "react-scroll";

const NavBarMovil = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      <section className="z-30 fixed w-full shadow-md bg-white">
        <nav className="h-14 w-full">
          <menu className=" w-full">
            <section className="w-full">
              <ul className="flex bg-colornav w-full">

                {!showMenu ? (
                  <li className="flex items-center">
                    <button
                      className="ml-1 h-7 flex flex-col justify-evenly p-1 rounded transition duration-300 "
                      onClick={handleShowMenu}
                    >
                      {/* Líneas del botón de menú */}
                      <div className="w-7 h-1 bg-black transition-transform duration-300 ease-in-out"></div>
                      <div className="w-7 h-1 bg-black transition-transform duration-300 ease-in-out"></div>
                      <div className="w-7 h-1 bg-black transition-transform duration-300 ease-in-out"></div>
                    </button>
                  </li>
                )
                  :
                  (
                    <li className="flex justify-end">
                      <i onClick={handleShowMenu} className="fa fa-times -ml-1  text-4xl mt-1 w-11 flex justify-center p-1" aria-hidden="true"></i>
                    </li>
                  )}



                <li className="ml-24">
                  <Scroll to="inicio">
                    <img className="h-16 p-1" src={logo} alt={logo} />
                  </Scroll>

                </li>
              </ul>

            </section>


            {showMenu && (
              <section className="flex flex-col items-center bg-slate-500   h-full">

                <ul className=" fixed h-full transition-allduration-500 ease-in-out w-full  shadow-md text-center border-t-2 border-black bg-colornav z-10">
                  <Scroll to='inicio' smooth={true} duration={600} offset={610}>
                    <LinkNav onCloseMenu={handleShowMenu} nameLink="SERVICIOS" />
                  </Scroll>

                  <Scroll to='metodologia' smooth={true} duration={600} offset={-250}>
                    <LinkNav onCloseMenu={handleShowMenu} nameLink="¿COMO LO HACEMOS?" />
                  </Scroll>

                  <Scroll to='servicios' smooth={true} duration={600} offset={450}>
                    <LinkNav onCloseMenu={handleShowMenu} nameLink="NUESTROS PROYECTOS" />
                  </Scroll>

                  <Scroll to='contacto' smooth={true} duration={600} offset={450}>
                    <LinkNav onCloseMenu={handleShowMenu} nameLink="CONTACTO" />
                  </Scroll>

                </ul>
              </section>
            )}
          </menu>
        </nav>
      </section>
    </div>
  );
};

export default NavBarMovil;
