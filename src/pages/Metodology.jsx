import salon from '../assets/images/cocina2.jpg'
import Button from '../components/Button'
import Metods from '../components/Metods'
import { Link as Scroll } from 'react-scroll'


const Metodology = () => {
    return (
        <div className='mt-64' id='metodologia'>
            <figure className='flex flex-col justify-center items-center mb-64'>
                <img className='absolute object-cover  h-850 border opacity-80 md:w-full' src={salon} alt={salon} />
                <section className='lg:flex flex flex-col items-center justify-center'>
                    <div className='relative w-80 bg-gray-200 bg-opacity-70 shadow-lg p-7 shadow-black lg:w-800 lg:h-72 lg:flex lg:flex-col lg:justify-center'>
                        <p className='text-2xl lg:text-4xl'>Nuestra metodología de trabajo</p>
                        <p className='font-light text-lg mt-5 p-3 lg:text-2xl'>
                            Cada proyecto de reforma es un nuevo reto para nosotros.
                            Buscar soluciones creativas para aprovechar mejor el espacio, dar sensación de calidez,
                            mejorar la iluminación… En definitiva, llevar tus ideas a la práctica con nuestro asesoramiento.
                        </p>
                    </div>
                    <section className='lg:flex'>
                        <Scroll to='contacto' smooth={true} duration={600}>
                            <Button buttonname="¿HABLAMOS?" text='text-xl' margin="mt-10" lgMargin='lg:mt-72' side="ml-72" width='w-34' height='h-auto' lgHeight='w-48' lgWidth='h-16' lgText='lg:text-2xl' />
                        </Scroll>

                    </section>
                </section>


            </figure>



            <section className='mt-[-110px] mb-10 sm:mb-0'>
                <Metods />
            </section>

            <section className='flex justify-center mb-10'>
                <div className=" border-t-2 border-blue-800 w-80 md:mt-10 md:w-600 lg:w-1250"></div>
            </section>

        </div>
    )
}

export default Metodology