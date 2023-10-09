import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ singleCard }) => {
  const { name, image, shortDetails, price, id } = singleCard;

  return (
    <div className="card glass" data-aos="flip-left">
      <figure>
        <img className="w-full h-[350px]" src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-zinc-200">{name}</h2>
        <p className="text-zinc-200">{shortDetails}</p>
        <p className="text-2xl font-semibold text-sky-700">Price: {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${id}`}>
            <button className="btn bg-gray-800 text-white border-none hover:bg-gray-600">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  singleCard: PropTypes.object,
};

export default Card;
