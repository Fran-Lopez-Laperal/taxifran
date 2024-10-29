import PropTypes from "prop-types";

const Button = ({ buttonname, position, margin, side, width, height,lgMargin, lgWidth, lgHeight, lgText  }) => {
    return (
        <div>
            <section className={`${position} ${margin} ${side}  transform -translate-x-1/2`}>
                <button className={`border-2 border-black shadow-lg bg-slate-300  font-light ${width} ${height} ${lgText} ${lgMargin} ${lgWidth} ${lgHeight} hover:bg-slate-200  hover:before:absolute hover:before:right-[10px] hover:before:text-black transition-all duration-1000 ease-in-out rounded`}>
                    {buttonname}
                </button>
            </section>
        </div>
    )
}

Button.propTypes = {
    buttonname: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    lgMargin: PropTypes.string.isRequired,
    lgWidth: PropTypes.string.isRequired,
    lgHeight: PropTypes.string.isRequired,
    lgText: PropTypes.string.isRequired,
};



export default Button