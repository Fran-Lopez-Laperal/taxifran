import PropTypes from "prop-types";

const Button = ({ buttonname, position, margin, side, width, height,lgMargin, lgWidth, lgHeight, lgText,text, }) => {
    return (
        <div>
            <section className={`${position} ${margin} ${side}  transform -translate-x-1/2`}>
                <button className={`flex items-center justify-center border border-black shadow-lg bg-slate-300 font-light p-2   ${text} ${width} ${height} ${lgText} ${lgMargin} ${lgWidth} ${lgHeight} hover:bg-slate-200  hover:before:absolute hover:before:right-[10px] hover:before:text-black transition-all duration-1000 ease-in-out`}>
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
    text: PropTypes.string.isRequired,
};



export default Button