import metod1 from '../assets/images/reloj.jpeg'
import metod2 from '../assets/images/pago.webp'
import metod3 from '../assets/images/año.jpeg'
import CardsMetod from '../components/CardsMetod'

const Metods = () => {
        return (
                <div>
                        <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-1 lg:p-1 lg:mt-10'>

                                <CardsMetod
                                        step='1'
                                        img={metod1}
                                        hideImgOnMobile={true}
                                        titlecard='Siempre puntuales'
                                        textcard1='No hacemos esperar a nuestros clientes, por ello, nuestro taxi en Bertamiráns llega siempre unos minutos antes de la hora indicada al lugar acordado.'
                                />

                                <CardsMetod
                                        step='2'
                                        img={metod1}
                                        titlecard='Facilidades de pago'
                                        textcard1='Ofrecemos diversas opciones de pago para adaptarnos a las necesidades de nuestros clientes, mediante Bizum, efectivo o tarjeta de crédito.'
                                />

                                <CardsMetod
                                        step='3'
                                        img={metod2}
                                        titlecard='Los 365 días de año'
                                        textcard1='Nuestro servicio está disponible todos los días del año, incluyendo festivos. Nos adaptamos a tus necesidades y horarios, garantizando un taxi siempre a tu disposición.'
                                />

                                <CardsMetod
                                        img={metod3}
                                />


                        </section>


                </div>
        )
}

export default Metods