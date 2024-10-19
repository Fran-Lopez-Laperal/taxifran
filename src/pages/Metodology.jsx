import salon from '../assets/images/cocina2.jpg'
import Button from '../components/Button'
import metod1 from '../assets/images/metod1.jpg'
import metod2 from '../assets/images/metod2.jpg'
import metod3 from '../assets/images/metod3.jpg'
import metod4 from '../assets/images/metod4.jpg'
import metod5 from '../assets/images/metod5.jpg'
import CardsMetod from '../components/CardsMetod'

const Metodology = () => {
    return (
        <div className='mt-64'>
            <figure className='flex flex-col justify-center items-center mb-64'>
                <img className='absolute object-cover h-850 border opacity-80 lg:w-full' src={salon} alt={salon} />
                <div className='relative h-auto w-320 bg-gray-200 bg-opacity-70 shadow-lg p-7 rounded'>
                    <p className='text-3xl'>Nuestra metodología de trabajo</p>
                    <p className='font-light text-lg mt-5 p-3'>
                        Cada proyecto de reforma es un nuevo reto para nosotros.
                        Buscar soluciones creativas para aprovechar mejor el espacio, dar sensación de calidez,
                        mejorar la iluminación… En definitiva, llevar tus ideas a la práctica con nuestro asesoramiento.
                    </p>
                </div>
                <section>
                    <Button buttonname="CONTACTO" margin="mt-10" side="ml-72" />
                </section>

            </figure>



            <section>
                <CardsMetod step='1' img={metod1} titlecard='Visita inicial' textcard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis'

                />
                <CardsMetod step='2' img={metod2} titlecard='Proyecto y ppresupuesto' textcard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis'

                />
                <CardsMetod step='3' img={metod3} titlecard='Formalización del contrato de obra
' textcard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis'

                />
                <CardsMetod step='4' img={metod4} titlecard='Tramitación de licencias' textcard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis'

                />
                <CardsMetod step='5' img={metod5} titlecard='Ejecución de la obra' textcard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis'

                />

            </section>

        </div>
    )
}

export default Metodology