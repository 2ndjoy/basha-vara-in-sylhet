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
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
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
