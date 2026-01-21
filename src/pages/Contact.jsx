import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      alert("Por favor, rellena todos los campos");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_rd1chah",
        "template_jpvo4qk",
        e.target,
        "1PYXH5TzE5YclbI6v"
      );

      alert("Mensaje enviado correctamente");

      setFormData({
        user_name: "",
        user_email: "",
        message: ""
      });

    } catch (error) {
      console.error("Error al enviar el email:", error);
      alert("No se pudo enviar el mensaje");
    }
  };

  return (
    <div id="contacto">
      <div className="h-auto bg-colorbghome bg-opacity-50 flex justify-center">
        <section className="lg:flex mb-14 sm:mb-28 mt-10 w-350 shadow-2xl p-9 bg-gradient-to-t from-color2contact to-transparent md:w-[650px] lg:h-500 lg:w-950 lg:mt-32">

          {/* INFO */}
          <section className="lg:mt-10">
            <p className="text-2xl font-normal">Contáctanos sin compromiso</p>

            <div className="mt-10">
              <div className="flex">
                <p className="text-xl">📍</p>
                <div className="ml-3">
                  <p>Rúa a Eira 10 - SANXENXO - 36960</p>
                  <p>Pontevedra</p>
                </div>
              </div>

              <div className="mt-3 flex">
                <p className="text-xl">📞</p>
                <p className="ml-3">677 116 137</p>
              </div>

              <div className="flex mt-3">
                <p className="text-xl">📩</p>
                <p className="ml-3">info@taxifran.com</p>
              </div>
            </div>
          </section>

          {/* FORM */}
          <section className="mt-1 lg:mt-10 lg:ml-20">
            <p className="font-light mb-5 p-2">
              Contacta con nosotros si necesitas algún servicio de Taxi.
            </p>

            <form
              className="text-center md:flex md:flex-col md:items-center"
              onSubmit={handleSubmit}
            >
              <div className="md:w-full md:gap-1 md:flex md:justify-around">
                <input
                  className="mb-3 border rounded border-gray-300 w-48 text-sm p-1 md:w-full md:h-10 lg:h-14 lg:p-5 lg:w-72 lg:text-base"
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Su nombre"
                />

                <input
                  className="mb-3 border rounded border-gray-300 w-48 text-sm p-1 md:w-full md:h-10 lg:h-14 lg:p-5 lg:ml-5 lg:w-72 lg:text-base"
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="Su correo electrónico"
                />
              </div>

              <textarea
                className="border p-3 rounded border-gray-300 w-48 h-20 text-sm md:w-full md:h-44 lg:w-595 lg:text-base lg:h-44"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
              />

              <div className="lg:flex lg:justify-end">
                <Button
                  type="submit"
                  id="email-send"
                  buttonname="ENVIAR"
                  height="h-7"
                  width="w-24"
                  margin="mt-5"
                  side="ml-44"
                />
              </div>
            </form>
          </section>

        </section>
      </div>
    </div>
  );
};

export default Contact;

