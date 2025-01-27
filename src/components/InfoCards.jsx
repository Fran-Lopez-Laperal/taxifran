import PropTypes from 'prop-types';
import AvisoLegal from './AvisoLegal';
import Privacity from './Privacity';
import CookiesInfo from './CookiesInfo';

const InfoCards = ({ closeCards, selectedCardId }) => {
    const arrayInfoCards = [
        { id: 1, component: <AvisoLegal /> },
        { id: 2, component: <Privacity /> },
        { id: 3, component: <CookiesInfo /> },
    ];

    const selectedCard = arrayInfoCards.find((card) => card.id === selectedCardId);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <section className="bg-white w-80 md:w-[600px] lg:w-[950px] p-4 rounded-lg shadow-lg relative max-h-screen overflow-auto">
                {/* Botón de cierre */}
                <button
                    onClick={closeCards}
                    className="absolute top-2 right-2 bg-blue-900 text-white px-2 py-1 rounded"
                >
                    X
                </button>

                {/* Contenido */}
                <article className="p-4">
                    {selectedCard ? (
                        <div>{selectedCard.component}</div>
                    ) : (
                        <p>Componente no encontrado</p>
                    )}
                </article>
            </section>
        </div>
    );
};

InfoCards.propTypes = {
    closeCards: PropTypes.func.isRequired,
    selectedCardId: PropTypes.number.isRequired,
};

export default InfoCards;
