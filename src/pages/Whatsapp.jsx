import whats from '../assets/images/5ae21cc526c97415d3213554.png'

const Whatsapp = () => {
    const phoneNumber = '679018393'; // 
    const message = 'Hola, quería pedir presupuesto para realizar una reforma';

    const openWhatsApp = () => {
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };


    return (
        <figure >
            <button className='w-32 md:w-40 flex fixed top-3/4  -right-5 ' onClick={openWhatsApp}>
                <img src={whats} alt={whats} />
            </button>

        </figure>
    )
}

export default Whatsapp