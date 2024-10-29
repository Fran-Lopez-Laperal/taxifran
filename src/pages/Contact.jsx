import Button from "../components/Button"

const Contact = () => {
    return (
        <div id="contact">
            <div className="h-auto bg-colorcontact flex justify-center">
                <section className="mb-10 mt-10 w-72 shadow-lg p-4 bg-gradient-to-t from-color2contact to-transparent lg:w-1250">
                    <section className="p-10">
                        <article>
                            <section className="">
                                <p className="text-3xl font-normal">Haz realidad tus sueños</p>
                                <p className="text-3xl font-normal">¿Empezamos?</p>
                            </section>
                            <section className="mt-5">
                                <p className="font-light ">Contacta con nosotros si quieres hacer realizar tus sueños o si tienes alguna duda sobre nosotros.</p>
                            </section>

                        </article>

                    </section>
                    <section className="flex flex-col items-center mb-10">
                        <input className="mb-3 border-2 rounded hover:border-gray-500 border-gray-300 transition-all duration-500 w-48" type="text" name="" id="" />
                        <input className="mb-3 border-2 rounded hover:border-gray-500 border-gray-300 transition-all duration-500 w-48" type="text" name="" id="" />
                        <input className="border-2 rounded hover:border-gray-500 border-gray-300 transition-all duration-500 w-48 h-20" type="text" name="" id="" />
                        <Button buttonname="ENVIAR" height="h-7" width="w-24" margin="mt-5" side="ml-44"/>
                    </section>
                </section>

            </div>

        </div>
    )
}

export default Contact