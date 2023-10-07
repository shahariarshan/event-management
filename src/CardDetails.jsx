

// eslint-disable-next-line react/prop-types
const CardDetails = ({ readMore }) => {
    const { name, image, short_description, price } = readMore || {}
    return (
        <div className="pt-9">
            <img src={image} alt="" />
            <h2 className="  text-4xl font-bold border-y-4 mt-3">{name}</h2>
            <p className="text-xl font-bold mt-3">Price:<small className="text-amber-900 text-4xl">{price}</small></p>
            <p className="mt-3">{short_description }</p>
            
        </div>
    );
};

export default CardDetails;