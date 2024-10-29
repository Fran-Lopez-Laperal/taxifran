import metod1 from '../assets/images/metod1.jpg'
import metod2 from '../assets/images/metod2.jpg'
import metod3 from '../assets/images/metod3.jpg'
import metod5 from '../assets/images/metod5.jpg'
import CardsMetod from '../components/CardsMetod'

const Metods = () => {
        return (
                <div>
                        <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-1 lg:mt-10'>
                                <CardsMetod step='1' img={metod1} hideImgOnMobile={true} titlecard='Visita inicial' textcard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis'

                                />
                                <CardsMetod step='2' img={metod2} titlecard='Proyecto y ppresupuesto' textcard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis'

                                />
                                <CardsMetod step='3' img={metod3} titlecard='Formalización del contrato de obra' textcard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis'

                                />
                               
                                <CardsMetod step='4' img={metod5} titlecard='Ejecución de la obra' textcard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis'

                                />
                        </section>


                </div>
        )
}

export default Metods