import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContetext } from "../context/useGlobal";
// import { createContext } from "react";
// import { GlobalContext } from "../context/useGlobal"; // Assuming it's GlobalContext, not GlobalContetext

function Navbar() {
  const { dispatch } = useContext(GlobalContetext);

  const handleLogout = () => {
    dispatch({ type: "LOG_OUT" });
    console.log("Logout clicked"); // Example action
  };

  return (
    <div className="bg-base-300 py-6">
      <div className="navbar max-w-5xl  mx-auto">
        <div className="navbar-start">
          <Link to="/" className="btn btn-secondary hidden lg:flex">
            MyMarket
          </Link>
          <button type="button" className="btn btn-secondary lg:hidden">
            MYkichen
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <p>Links</p>
        </div>
        <div className="navbar-end">
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
