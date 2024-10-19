import PropTypes from "prop-types"

const CardsMetod = ({ img, titlecard, textcard, step }) => {
    return (
        <article>

            <figure>
                <img src={img} alt={img} />
            </figure>

            <section className='relative bg-black'>
                <section className='flex h-32 items-end'>
                    <p className='relative top-16 text-shadow-custom text-200 text-white font-semibold'>{step}</p>
                    <p className='text-white font-bold text-lg'>{titlecard}</p>
                </section>
                <p className='text-white p-5'>{textcard}
                </p>
            </section>

        </article>

    )
}

CardsMetod.propTypes = {
    img: PropTypes.string.isRequired,
    titlecard: PropTypes.string.isRequired,
    textcard: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired
}

export default CardsMetod