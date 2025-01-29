import logo from '../assets/images/OBRAS.png'
import LinkNav from "./LinkNav"
import { Link as Scroll } from 'react-scroll'

const NavBarDesktop = () => {
    return (
        <div>
            <header>
                <nav className="flex h-28 p-10">
                    <span className="flex justify-center items-center">
                        <img className='h-28' src={logo} alt={logo} />
                    </span>

                    <ul className="flex justify-evenly w-full items-center">

                        <li className="w-full h-auto  flex  justify-center items-center">
                            <Scroll to='inicio' smooth={true} duration={600} offset={450}>
                                <LinkNav font="font-semibold" nameLink="INICIO" />
                            </Scroll>
                        </li>

                        <li className="w-full h-auto  flex  justify-center items-center">
                            <Scroll to='servicios' smooth={true} duration={600} offset={30}>
                                <LinkNav font="font-light" nameLink="SERVICIOS" />
                            </Scroll>
                        </li>

                        <li className="w-full h-auto  flex  justify-center items-center">
                            <Scroll to='metodologia' smooth={true} duration={600} offset={-100} >
                                <LinkNav font="font-light" nameLink="¿COMO LO HACEMOS?" />
                            </Scroll>
                        </li>

                        <li className="w-full h-auto  flex  justify-center items-center">
                            <Scroll to='contacto' smooth={true} duration={600} offset={450}>
                                <LinkNav font="font-light" nameLink="CONTACTO" />
                            </Scroll>
                        </li>
                    </ul>

                </nav>
            </header>
        </div>
    )
}

export default NavBarDesktop