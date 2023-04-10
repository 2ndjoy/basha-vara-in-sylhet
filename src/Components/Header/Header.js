import { Link } from "react-router-dom";

const Header = () => {
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
            <Link to="/services">Nothing</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
