import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Portal = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="bg-pink-600">
        <Navbar></Navbar>
      </div>
      <div className="card card-side bg-base-100 shadow-xl lg:ow-1/2 mx-auto mt-10 flex justify-center items-center">
        <figure className="w-1/3">
          <img
            className="h-full"
            src={
              user?.photoURL
                ? user.photoURL
                : "https://i.ibb.co/DCghjvD/profile.jpg"
            }
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {user?.displayName ? user.displayName : "Name not found"}
          </h2>
          <p>{user.email ? user.email : "Email not found"}</p>
        </div>
      </div>
    </div>
  );
};

export default Portal;
