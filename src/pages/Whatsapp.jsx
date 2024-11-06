import whats from '../assets/images/5ae21cc526c97415d3213554.png'

const Whatsapp = () => {
    const phoneNumber = '677116137'; // 
    const message = 'Hola, ¿cómo estás?';

    const openWhatsApp = () => {
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };


    return (
        <figure >
            <button className='w-28 flex fixed top-96 right-4' onClick={openWhatsApp}>
                <img src={whats} alt={whats} />
            </button>

        </figure>
    )
}

export default Whatsapp