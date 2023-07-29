import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar h-20 pe-5 lg:px-20 bg-[#28C8A4]">
        <div className="navbar-start">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
                <Link to="/our-product">Our Product</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="font-bold text-xl lg:text-3xl text-white">
            Your Watch
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 gap-3">
            <Link to="/home" className="text-white text-xl font-semibold">
              Home
            </Link>

            <Link to="/our-product" className="text-white text-xl font-semibold">
             Our Product
            </Link>
            <Link to="/blogs" className="text-white text-xl font-semibold">
              Blogs
            </Link>
            <Link to="/contact" className="text-white text-xl font-semibold">
              Contact us
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="px-5 py-2 bg-[#6ddbc3] rounded-md text-white text-xl font-semibold">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
