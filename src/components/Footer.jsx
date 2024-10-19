import insta from '../assets/images/insta.jpg'
import facebook from '../assets/images/facebook.jpg'
const Footer = () => {
    return (
        <div className="mt-40">
            <footer>
                <section className="bg-colorfooter h-28 text-gray-400 flex flex-col justify-center items-center">
                    <article className="flex w-full justify-evenly mb-5">
                        <p>Aviso legal</p>
                        <p>Política de privacidad</p>
                    </article>

                    <p>Política de cookies</p>
                </section>

                <section className="bg-black h-auto flex flex-col items-center justify-center">
                    <p className="text-white font-light text-sm mt-10">©2024  Obras y reformas Telmo</p>
                    <section className="flex items-center mt-5 justify-evenly w-full">
                        <figure>
                            <a href="https://www.instagram.com/reformas_telmo_sl/">
                                <img className='h-10 w-10' src={insta} alt={insta} />
                            </a>

                        </figure>
                        <figure>
                            <a href="https://www.facebook.com/obrasereformastelmo?locale=es_ES">
                                <img className='h-14 w-14' src={facebook} alt={facebook} />
                            </a>
                        </figure>
                    </section>
                </section>



            </footer>
        </div>
    )
}

export default Footer