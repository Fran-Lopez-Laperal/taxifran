import salon from '../assets/images/cocina2.jpg'

const Steps = () => {
    return (
        <div className='mt-64'>
            <figure className='flex justify-center items-center mb-64'>
                <img className='absolute object-cover h-850 border opacity-80 lg:w-full' src={salon} alt={salon} />
                <div className='relative h-auto w-320 bg-gray-200 bg-opacity-70 shadow-lg p-7 rounded'>
                    <p className='text-3xl'>Nuestra metodología de trabajo</p>
                    <p className='font-light text-lg mt-5 p-3'>
                    Cada proyecto de reforma es un nuevo reto para nosotros. 
                    Buscar soluciones creativas para aprovechar mejor el espacio, dar sensación de calidez,
                     mejorar la iluminación… En definitiva, llevar tus ideas a la práctica con nuestro asesoramiento.
                    </p>
                </div>
            </figure>
        <section>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.</p>
            </article>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.</p>
            </article>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.</p>
            </article>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.</p>
            </article>
            v
            <article>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.</p>
            </article>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.</p>
            </article>
        </section>

        </div>
    )
}

export default Steps