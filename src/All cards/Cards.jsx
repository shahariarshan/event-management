import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Cards = ({card}) => {
const {name,image,short_description,id}= card || {}
    return (
        <div className="card  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%   shadow-xl">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {
          short_description.length >180

          ?<p>{short_description.slice(0,200)}<Link  className="text-blue-600 pl-2">Read More...
          
          </Link></p>
          :
          <p>{short_description}</p>

          }
          <Link to={`/cards/${id}`}  className="btn btn-accent text-black">Details </Link>
          
        </div>
      </div>
    );
};

export default Cards;