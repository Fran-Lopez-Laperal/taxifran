import image1 from "../assets/images/taxilogo2.jpeg"
import Button from "../components/Button"
import { Link as Scroll } from "react-scroll"

const Home = () => {
  return (
    <div id="inicio">
      <section className="relative ">
        <article>
          <figure className="w-full ">
            <img className="h-650 object-cover w-full lg:h-870" src={image1} alt="" />
          </figure>
        </article>
        <section className="section">
          <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-400 w-320 md:w-600 lg:w-950  lg:h-48 bg-colorbghome bg-opacity-80 rounded shadow-lg p-5 ">
            <section className="w-full mt-10">
              <div className="text-2xl md:text-3xl lg:text-4xl p-1 md:font-normal flex flex-col items-end lg:flex lg:flex-row lg:justify-end">
                <p className="lg:mr-4">TAXI FRAN</p>
                <p className="lg:mr-4">Servicios de </p>
                <p className="">TAXI</p>
              </div>

              <div className="text-2xl md:text-3xl p-1  font-semi-bold flex flex-col items-end -tracking-tighter lg:text-3xl lg:flex lg:flex-row lg:justify-end lg:font-semi-bold">
                <p className="lg:mr-4">Te llevamos a y te traemos</p>
                <p className="lg:mr-4">de la manera mas comoda</p>
              </div>

            </section>
          </article>
          <Scroll to="contacto" smooth={true} duration={600}>
            <Button buttonname="CONTACTO" position="absolute" margin="bottom-10" side="left-2/3" width="w-36" height="h-10" />
          </Scroll>

        </section>
       
      </section>
       <section className='flex justify-center mt-10'>
          <div className=" border-t-2 border-colornav w-80 md:mt-10 md:w-600 lg:w-1250"></div>
        </section>
    </div>
  )
}

export default Home
