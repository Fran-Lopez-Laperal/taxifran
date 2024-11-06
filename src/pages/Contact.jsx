import Button from "../components/Button"

const Contact = () => {
    return (
        <div id="contact">
            <div className="h-auto bg-colorcontact flex justify-center">
                <section className="mb-10 mt-10 w-350 shadow-lg p-9 bg-gradient-to-t from-color2contact to-transparent lg:w-1250">
                    <section className="">
                        <article>
                            <section className="">
                                <p className="text-2xl font-normal">Haz realidad tus sueños</p>
                                <p className="text-2xl font-normal">¿Empezamos?</p>

                            </section>
                        </article>

                        <article className="mt-10">
                            <section className="">
                                <article className="flex">
                                    <p className="text-xl">📍</p>
                                    <section className="ml-3">
                                        <p>A Barrosa, 50 A - ADINA - 36970 </p>
                                        <p>Pontevedra</p>
                                    </section>
                                </article>
                            </section>

                            <section className="mt-3 flex">
                                <p className="text-xl">📞</p>
                                <p className="ml-3">629 678 568</p>
                            </section>

                            <section className="flex mt-3">
                                <p className="text-xl">📩</p>
                                <p className="ml-3">obrasereformastelmo@gmail.com</p>
                            </section>
                        </article>
                    </section>

                    <section className="mt-10">
                        <p className="font-light mb-5 p-2">Contacta con nosotros si quieres hacer realizar tus sueños o si tienes alguna duda sobre nosotros.</p>
                        <article className="flex flex-col items-center mb-10">
                            <input className="mb-3 border rounded hover:border-gray-500 border-gray-300 transition-all duration-500 w-48" type="text" name="" id="" />
                            <input className="mb-3 border rounded hover:border-gray-500 border-gray-300 transition-all duration-500 w-48" type="text" name="" id="" />
                            <input className="border rounded hover:border-gray-500 border-gray-300 transition-all duration-500 w-48 h-20" type="text" name="" id="" />
                            <Button buttonname="ENVIAR" height="h-7" width="w-24" margin="mt-5" side="ml-44" />
                        </article>

                    </section>
                </section>

            </div>

        </div>
    )
}

export default Contact