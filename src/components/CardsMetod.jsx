import PropTypes from "prop-types"

const CardsMetod = ({ img, titlecard, textcard1,textcard2, step, hideImgOnMobile }) => {
    return (
        <article className="sm:mt lg:mt-20 ">
            <figure className={hideImgOnMobile ? ' hidden lg:block' : ''}>
                <img className="w-full h-auto object-cover lg:h-64" src={img} alt={titlecard} />
            </figure>

            <section className='relative bg-black md:p-2 sm:h-450 md:h-auto lg:h-auto lg:min-h-96'>
                <section className='flex h-32 items-end'>
                    <p className='relative top-6 text-shadow-custom text-150 text-white font-semibold'>{step}</p>
                    <p className='text-white font-bold text-lg mb-6'>{titlecard}</p>
                </section>
                <p className='text-white p-5 text-md font-extralight'>{textcard1}</p>
                <p className='text-white p-5 text-md  font-extralight'>{textcard2}</p>
            </section>
        </article>
    )
}

CardsMetod.propTypes = {
    img: PropTypes.string,
    titlecard: PropTypes.string,
    textcard1: PropTypes.string,
    textcard2: PropTypes.string,
    step: PropTypes.string,
    hideImgOnMobile: PropTypes.bool
}

export default CardsMetod
