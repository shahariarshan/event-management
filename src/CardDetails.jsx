import Footer from "./Footer/Footer";


// eslint-disable-next-line react/prop-types
const CardDetails = ({ readMore }) => {
    const { name, image, short_description, price } = readMore || {}
    return (
        <div className="pt-9">
            <img className=" w-4/6 mx-auto" src={image} alt="" />
            <div className="pl-10">
            <h2 className="  text-4xl font-bold border-y-4 mt-3">{name}</h2>
            <p className="text-xl font-bold mt-3">Price:<small className="text-amber-900 text-4xl">{price}</small></p>
            <p className="mt-3">{short_description}</p>
            <div className="rating mt-5 mx-auto pb-4">
            <p className="font-semibold mr-2">Rate Us:</p>
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star"  />
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" />
                <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
            </div>
           
            <div className="mt-10">
           <Footer></Footer>
           </div>

        </div>
    );
};

export default CardDetails;