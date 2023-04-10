import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/AuthProvider";
import { useContext } from "react";
import SmallLoaing from "../../SmallLoading/SmallLoaing";

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const handlelogout = () => {
    logOut();
  };
  return (
    <div className="navbar bg-slate-200">
      <div className="flex-1">
        <Link to="/" className="normal-case text-xl font-bold text-black">
          RentHouse
        </Link>
      </div>
      <div className="flex-none  text-black">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/addservices">Add Service</Link>
          </li>
          {/* <li>
            {user?.email ? (
              <button onClick={handlelogout} className="btn btn-ghost">
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <SmallLoaing />
        ) : user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="" src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard" className="justify-between">
                  Go to Dashboard
                </Link>
              </li>
              <li className="mt-2">
                <button
                  className="btn btn-sm btn-outline"
                  onClick={handlelogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn btn-sm btn-outline">
            <Link to="/login" className="text-black">
              Log in
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
