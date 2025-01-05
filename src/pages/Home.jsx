import image1 from "../assets/images/layout.jpg"
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
          <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-400 w-320 lg:w-1250 lg:h-60 bg-gray-200 bg-opacity-75 rounded shadow-lg p-5 ">
            <section className="w-full ">
              <div className="text-2xl lg:text-4xl p-1 lg:font-medium  flex flex-col items-end lg:flex lg:flex-row lg:justify-end">
                <p className="lg:mr-4  text-blue-700">REFORMAS TELMO</p>
                <p className="lg:mr-4">Proyectos y</p>
                <p className="">obras</p>
              </div>

              <div className="text-2xl p-1 font-light flex flex-col items-end -tracking-tighter lg:text-3xl lg:flex lg:flex-row lg:justify-end lg:font-light">
                <p className="lg:mr-4">Diseñamos ambientes |</p>
                <p className="lg:mr-4">únicos, renovamos tu |</p>
                <p className="">vida</p>
              </div>
              <div className="text-xl  font-extralight flex flex-col items-end tracking-[0.25rem] lg:flex lg:flex-row lg:justify-end">
                <p className="lg:mr-4">Todo tipo de</p>
                <p className="lg:mr-4">reformas para</p>
                <p>tu espacio</p>
              </div>
            </section>
          </article>
          <Scroll to="contacto" smooth={true} duration={600}>
            <Button buttonname="CONTACTO" position="absolute" margin="bottom-10" side="left-2/3" width="w-36" height="h-10" />
          </Scroll>

        </section>

      </section>
    </div>
  )
}

export default Home
