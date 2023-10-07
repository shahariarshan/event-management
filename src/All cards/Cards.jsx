import { Link } from "react-router-dom";


const Cards = ({card}) => {
const {name,image,short_description,id}= card || {}
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {
          short_description.length >180

          ?<p>{short_description.slice(0,200)}<Link to={`/cards/${id}`} className="text-blue-600 pl-2">Read More...</Link></p>
          :
          <p>{short_description}</p>

          }
          
        </div>
      </div>
    );
};

export default Cards;