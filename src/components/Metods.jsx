import metod1 from '../assets/images/metod1.jpg'
import metod2 from '../assets/images/metod2.jpg'
import metod3 from '../assets/images/metod3.jpg'
import metod5 from '../assets/images/metod5.jpg'
import CardsMetod from '../components/CardsMetod'

const Metods = () => {
        return (
                <div>
                        <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-1 lg:mt-10'>

                                <CardsMetod
                                        step='1'
                                        img={metod1}
                                        hideImgOnMobile={true}
                                        titlecard='Visita inicial'
                                        textcard1='Realizamos una indispensable visita inicial para
                                        conocer de primera mano las necesidades, gustos y estilo de vida de nuestros clientes. Posteriormente, pasamos a recoger las mediciones, toma 
                                        de datos, estado de las instalaciones, materiales y elementos constructivos visibles, para analizar las necesidades de cada espacio.'
                                />

                                <CardsMetod
                                        step='2'
                                        img={metod2}
                                        titlecard='Proyecto y ppresupuesto'
                                        textcard1='Generamos los planos de planta del inmueble a reformar y la propuesta de reforma, compuesta por el proyecto, planos de planta reformada y presupuesto detallado, en base a la información facilitada por el cliente.'
                                        textcard2='En este punto asesoramos al cliente sobre los materiales a instalar para alcanzar sus expectativas cualitativas (calidades, durabilidad, eficiencia energética, precios), explicando cada una de las partidas presupuestarias al detalle y plazos de ejecución.'
                                />

                                <CardsMetod
                                        step='3'
                                        img={metod3}
                                        titlecard='Formalización y plazos de obra'
                                        textcard1='Una vez elegido el proyecto a ejecutar, donde se detallan los
                                        trabajos a realizar, materiales utilizados y plazos de ejecución'
                                />

                                <CardsMetod
                                        step='4'
                                        img={metod5}
                                        titlecard='Ejecución de la obra'
                                        textcard1='Supervisamos todos los trabajos diarios planificados en obra así como
                                        la correcta instalación de los materiales con el objetivo de evitar deficiencias
                                        y alcanzar la excelencia del proyecto. Cumplimiento de plazos y ajustándonos al
                                        presupuesto establecido.Una vez ejecutado el proyecto de reforma integral, y 
                                        tras una exhaustiva limpieza general del inmueble, realizamos una inspección 
                                        integra y detallada, verificando con todo detalle los trabajos efectuados, antes
                                        de su entrega.'
                                />

                        </section>


                </div>
        )
}

export default Metods