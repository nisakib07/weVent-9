import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    userSignIn(email, password)
      .then(() => {
        toast.success("Signed In Successfully");

        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Sign In Failed");
      });
  };

  return (
    <div className="bg-pink-700">
      <Navbar></Navbar>
      <div className="hero min-h-scree">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-pink-200">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-transparent bg-pink-200 shadow-2xl">
            <form onSubmit={handleLoginSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered focus:text-pink-600 placeholder:font"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered focus:text-pink-600"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn border-none bg-pink-700 text-white hover:bg-pink-500"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
