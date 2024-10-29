import PropTypes from "prop-types"

const CardsMetod = ({ img, titlecard, textcard, step, hideImgOnMobile }) => {
    return (
        <article className="sm:mt-2 lg:mt-20">
            <figure className={hideImgOnMobile ? ' hidden lg:block' : ''}>
                <img className="w-full h-auto object-cover lg:h-64" src={img} alt={titlecard} />
            </figure>

            <section className='relative bg-black'>
                <section className='flex h-32 items-end'>
                    <p className='relative top-16 text-shadow-custom text-200 text-white font-semibold'>{step}</p>
                    <p className='text-white font-bold text-lg'>{titlecard}</p>
                </section>
                <p className='text-white p-5'>{textcard}</p>
            </section>
        </article>
    )
}

CardsMetod.propTypes = {
    img: PropTypes.string,
    titlecard: PropTypes.string.isRequired,
    textcard: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    hideImgOnMobile: PropTypes.bool
}

export default CardsMetod
