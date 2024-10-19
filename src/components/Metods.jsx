import metod1 from '../assets/images/metod1.jpg'
import metod2 from '../assets/images/metod2.jpg'
import metod3 from '../assets/images/metod3.jpg'
import metod4 from '../assets/images/metod4.jpg'
import metod5 from '../assets/images/metod5.jpg'
import CardsMetod from '../components/CardsMetod'

const Metods = () => {
  return (
    <div>
         <CardsMetod step='1' titlecard='Visita inicial' textcard='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, omnis.
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

    </div>
  )
}

export default Metods