import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Outlet></Outlet>

      <ToastContainer pauseOnHover={false} autoClose={2000}></ToastContainer>
    </div>
  );
};

export default Root;
