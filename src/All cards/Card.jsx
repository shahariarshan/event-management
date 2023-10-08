import Cards from "./Cards";


// eslint-disable-next-line react/prop-types
const Card = ( {cards}) => {
    console.log(cards)
    return (
        <div>
            <h1 className="text-4xl text-center p-6">Services</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
       {
            // eslint-disable-next-line react/prop-types
            cards?.map(card =><Cards key={card.id} card={card}></Cards>)
        }
       </div>
        </div>
    );
};

export default Card;