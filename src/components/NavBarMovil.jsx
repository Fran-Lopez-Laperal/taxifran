import { useState } from "react";
import "./NavBarMovil.css";
import LinkNav from "./LinkNav";

const NavBarMovil = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <section className="relative">
        <nav className="h-14">
          <menu className="">
            <button
              className="ml-2 h-7 flex flex-col justify-evenly hover:bg-gray-200 p-1 rounded transition duration-300"
              onClick={handleShowMenu}
            >
              {/* Líneas del botón de menú */}
              <div className="w-7 h-1 bg-black transition-transform duration-300 ease-in-out hover:bg-gray-600"></div>
              <div className="w-7 h-1 bg-black transition-transform duration-300 ease-in-out hover:bg-gray-600"></div>
              <div className="w-7 h-1 bg-black transition-transform duration-300 ease-in-out hover:bg-gray-600"></div>
            </button>

            {showMenu && (
              <section className="flex flex-col items-center">
                <ul className="transition-all duration-500 ease-in-out mt-7 w-full absolute shadow-md text-center border-t-2 border-black bg-white z-10">
                  <LinkNav onCloseMenu={handleShowMenu} nameLink="Servicios" />
                  <LinkNav onCloseMenu={handleShowMenu} nameLink="Proyectos" />
                  <LinkNav onCloseMenu={handleShowMenu} nameLink="Contacto" />
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
