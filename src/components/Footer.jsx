
const Footer = () => {
    return (
        <div className="mt-40">
            <footer>
                <section className="bg-colorfooter h-28 text-gray-400 flex flex-col justify-center items-center">
                    <article className="flex w-full justify-evenly mb-5">
                        <p>Aviso legal</p>
                        <p>Política de privacidad</p>
                    </article>

                    <p>Política de cookies</p>
                </section>
                <section className="bg-black h-20 flex items-center justify-center">
                    <p className="text-white font-light text-sm">©2024  Obras y reformas Telmo</p>
                </section>

            </footer>
        </div>
    )
}

export default Footer