import cocina from '../assets/images/cocina.jpg'


const Information = () => {
    return (
        <div id='servicios'>
            <section className="p-5 lg:flex lg:justify-center" >

                <article className='lg:flex lg:w-1250 lg:justify-center'>
                    <section className="flex flex-col w-full items-center">
                        <header className="mb-10 p-5">
                            <article>
                                <p className="text-3xl md:text-5xl mb-5">Tú idea, nuestro compromiso</p>
                                <p className="text-xl md:text-2xl  font-light">Dinos cual es tu idea y la transformamos en realidad.</p>
                                <p className="text-xl md:text-2xl font-light">Gestionamos de forma global tu proyecto de reforma</p>
                            </article>

                        </header>
                        <article className="flex mb-5 w-72 md:w-595 md:mb-10">

                            <section className="mr-5">
                                <p>✅</p>
                            </section>
                            <section>
                                <p className="text-lg md:text-2xl md:mb-2"> Diseños personalizados</p>
                                <p className="font font-light  md:text-xl">Nuestro equipo te asesorara tecnicamente y te propondrán las mejores opciones de distribucion
                                    iluminación y materiales, elaborando el proyecto ajustado a tu forma de vida, gustos y cesedidades
                                    y presupuesto.
                                </p>
                            </section>

                        </article>

                        <article className="flex mb-5 w-72 md:w-595 md:mb-10">

                            <section className="mr-5">
                                <p>✅</p>
                            </section>
                            <section>
                                <p className="text-lg md:text-2xl md:mb-2"> Selección de materiales</p>
                                <p className="font font-light  md:text-xl">Ponemos a tu disposición las mejor opciones en materiales ofrecidos por los mejores
                                    proveedrores  y te asesoramos en la correcta elección de los materiales mas adeducados
                                    a tu proyecto sin desviarnos del presupeuesto
                                </p>
                            </section>

                        </article>

                        <article className="flex w-72 md:w-595 md:mb-10">

                            <section className="mr-5">
                                <p>✅</p>

                            </section>
                            <section>
                                <p className="text-lg md:text-2xl md:mb-2 ">Sin imprevistos</p>
                                <p className="font font-light  md:text-xl">
                                    Realizamos un estudio del estado del espacio que quieres reformas para evitar imprevistos
                                    durante la ejecición de la reforma
                                </p>
                            </section>

                        </article>
                    </section>
                    <section className='w-full flex justify-center mt-10'>
                        <figure className='shadow-black shadow-lg'>
                            <img className='h-96 w-80 md:w-595 md:h-750 rounded-sm  lg:h-750 lg:w-600 ' src={cocina} alt={cocina} />
                        </figure>
                    </section>
                </article>
            </section>
            <section className='flex justify-center'>
                <div className=" border-t-2 border-blue-800 w-80 md:mt-10 md:w-600 lg:w-1250"></div>
            </section>

        </div>
    )
}

export default Information