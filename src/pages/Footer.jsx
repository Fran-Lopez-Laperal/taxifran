import insta from '../assets/images/insta.jpg'
import facebook from '../assets/images/facebook.jpg'
import { useState } from 'react'
import InfoCards from '../components/InfoCards'

const Footer = () => {
    const [showCards, setShowCards] = useState(null);  

    const handleShowCards = (id) => {
     
        setShowCards(prevState => (prevState === id ? null : id));
    };

    return (
        <div className="">
            <footer>
                <section className="bg-colorfooter h-28 text-gray-400 flex flex-col justify-center items-center">
                    <article className="flex text-xl w-full justify-evenly mb-5 text-white">
                        <button onClick={() => handleShowCards(1)}>
                            <p className='text-base md:text-2xl'>Aviso legal</p>
                        </button>
                        <button onClick={() => handleShowCards(2)}>
                            <p className='text-base md:text-2xl'>Política de privacidad</p>
                        </button>
                        <button onClick={() => handleShowCards(3)}>
                            <p className='text-base md:text-2xl'>Política de cookies</p>
                        </button>
                    </article>
                </section>

               
                {showCards && (
                    <InfoCards 
                        closeCards={() => setShowCards(null)} 
                        selectedCardId={showCards}  
                    />
                )}

                <section className="bg-black h-auto flex flex-col items-center justify-center">
                    <p className="text-white font-light text-sm md:text-xl mt-10">©2025  Obras y Reformas Telmo</p>
                    <section className="flex items-center mt-5 justify-evenly w-full mb-10 sm:mb-28">
                        <figure>
                            <a href="https://www.instagram.com/reformas_telmo_sl/">
                                <img className='h-10 w-10' src={insta} alt="Instagram" />
                            </a>
                        </figure>
                        <figure>
                            <a href="https://www.facebook.com/obrasereformastelmo?locale=es_ES">
                                <img className='h-14 w-14' src={facebook} alt="Facebook" />
                            </a>
                        </figure>
                    </section>
                </section>
            </footer>
        </div>
    );
};

export default Footer;
