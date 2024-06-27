import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logoImg.png";
const Navbar = () => {
  const navOption = (
    <>
      <li>
        <Link className="navLink" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/">
          Why Us?{" "}
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/services">
          Services
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/team">
          Team
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/faq">
          FAQ
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/">
          Blog
        </Link>
      </li>
    </>
  );
  return (
    <div className="max-w-screen-xl mx-auto navbarBg">
      <div className="navbar-flex fixed bg-opacity-30  text-white ">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* for small device (dropdown-content)*/}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navOption}
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        {/* laptop view */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="text-end">
          <button className="contactUsBtn">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
