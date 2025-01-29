import { useState } from "react"
import Button from "../components/Button"
import emailjs from 'emailjs-com'

const Contact = () => {

    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: ""

    })



    const handleSubmit = async (e) => {
        e.preventDefault()

        if(formData.name === "" || formData.email === "" || formData.message === ""){
            alert("Por favor, rellene todos los campos")
            return
        }

        try {
            const response = await emailjs.sendForm('service_9arwjbn', 'template_x6k8b7e', e.target, 'luKgETKyzUKU2Ynic')
            if (response.text === "OK") {
                console.log(response)
            } else {
                console.error("Error al obtener los datos");
            }

        } catch (tryError) {
            console.error(tryError)
        }

        setformData({
            name: "",
            email: "",
            message: ""
        })

    }



    const handleChange = (e) => {
        setformData(e.target.value)
    }



    return (
        <div id="contacto">
            <div className="h-auto bg-colorcontact flex justify-center">
                <section className="lg:flex mb-14 sm:mb-28 mt-10 w-350 shadow-2xl p-9 bg-gradient-to-t from-color2contact to-transparent md:w-[650px] lg:h-500 lg:w-950 lg:mt-32">
                    <section className="lg:mt-10">
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



                    <section className="mt-1 lg:mt-10 lg:ml-20">
                        <p className="font-light mb-5 p-2">Contacta con nosotros si quieres hacer realizar tus sueños o si tienes alguna duda sobre nosotros.</p>
                        <article className=" mb-10 ">
                            <form className="text-center md:flex md:flex-col md:items-center" action="" onSubmit={handleSubmit}>
                                <section className="md:w-full md:gap-1 md:flex md:justify-around ">
                                    <input
                                        className="mb-3 border rounded hover:border-gray-500 border-gray-300 transition-all duration-500 w-48 text-sm p-1 placeholder:text-black md:w-full md:h-10 lg:h-14 lg:p-5 lg:w-72 lg:text-base"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        name="name"
                                        id="nombre"
                                        placeholder="Su nombre"

                                    />

                                    <input
                                        className="mb-3 border rounded hover:border-gray-500 border-gray-300 transition-all duration-500 w-48 text-sm p-1 placeholder:text-black md:w-full md:h-10 lg:h-14 lg:p-5 lg:ml-5 lg:w-72 lg:text-base"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        name="email"
                                        id="mail"
                                        placeholder="Su correo electrónico"
                                    />
                                </section>

                                <input
                                    className="border rounded hover:border-gray-500 border-gray-300 transition-all duration-500 w-48 h-20 font-light text-sm text-center placeholder:text-black md:w-full md:h-44 lg:w-595 lg:text-base lg:h-44"
                                    type="textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    name="message"
                                    id="mensaje"
                                    placeholder="¿En que podemos ayudarte?"
                                />
                                <section className="lg:flex lg:justify-end">
                                    <Button type="submit" id="email-send" buttonname="ENVIAR" height="h-7" width="w-24" margin="mt-5" side="ml-44" />
                                </section>


                            </form>

                        </article>

                    </section>
                </section>

            </div>

        </div>
    )
}

export default Contact