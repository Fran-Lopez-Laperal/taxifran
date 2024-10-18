import image1 from "../assets/images/layout.jpg"

const Home = () => {
  return (
    <div>
      <section className="relative ">
        <article>
          <figure className="w-full ">
            <img className="h-650 object-cover w-full lg:h-750" src={image1} alt="" />
          </figure>
        </article>
        <section className="section">
          <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-350 w-320 lg:w-1250 lg:h-60 bg-gray-200 bg-opacity-60 shadow-lg p-5 ">
            <section className="w-full ">
              <div className="text-3xl lg:text-4xl p-1 lg:font-medium  flex flex-col items-end lg:flex lg:flex-row lg:justify-end">
                <p className="lg:mr-4  text-blue-700">REFORMAS TELMO</p>
                <p className="lg:mr-4">Proyectos y</p>
                <p className="">obras</p>
              </div>

              <div className="text-2xl p-1 font-light flex flex-col items-end -tracking-tighter lg:text-3xl lg:flex lg:flex-row lg:justify-end lg:font-light">
                <p className="lg:mr-4">Diseñamos ambientes |</p>
                <p className="lg:mr-4">únicos, renovamos tu |</p>
                <p className="">vida</p>
              </div>
              <div className="text-xl font-extralight flex flex-col items-end tracking-[0.25rem] lg:flex lg:flex-row lg:justify-end">
                <p className="lg:mr-4">Todo tipo de</p>
                <p className="lg:mr-4">reformas para</p>
                <p>tu espacio</p>
              </div>
            </section>
          </article>
          <section className="absolute bottom-10 left-2/3 transform -translate-x-1/2">
            <button className="border shadow-lg bg-slate-300 w-36 h-10 hover:bg-slate-200 hover:before:content-['\2192'] hover:before:absolute hover:before:right-[10px] hover:before:text-black transition-all duration-1000 ease-in-out">
              CONTACTO
            </button>
          </section>
        </section>

      </section>
    </div>
  )
}

export default Home
