import Cards from "./Cards";


// eslint-disable-next-line react/prop-types
const Card = ( {cards}) => {
    console.log(cards)
    return (
        <div>
            <h1 className="text-3xl text-center p-5 font-bold text-green-600 ">We are Providing</h1>
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