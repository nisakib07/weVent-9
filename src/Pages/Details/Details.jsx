import { useLocation, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Details = () => {
  const location = useLocation();
  console.log(location);
  const [matchedService, setMatchedService] = useState({});

  const { services } = useContext(AuthContext);

  const { image, name, price, description } = matchedService;

  const { id } = useParams();
  const intId = parseInt(id);

  useEffect(() => {
    const matched = services.find((matchedData) => matchedData.id === intId);
    setMatchedService(matched);
  }, [intId, services]);

  console.log(matchedService);

  return (
    <div>
      <div className="bg-pink-700">
        <Navbar></Navbar>
      </div>
      <div className="w-3/4 mx-auto">
        <img className="w-full" src={image} alt="" />

        <h3 className="text-3xl">{name}</h3>
        <p>Price : {price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
