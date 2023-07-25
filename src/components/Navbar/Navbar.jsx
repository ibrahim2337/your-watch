import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar h-24 lg:fixed lg:z-50 lg:opacity-40 lg:bg-black  pe-5 lg:px-20">
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
                <Link to="/product">Product</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <a  className="font-bold text-xl lg:text-3xl text-[#7ba4d3]">Your Watch</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 gap-3">
            <Link to="/home" className="text-white text-xl font-semibold">
              Home
            </Link>
        
            <Link to="/product" className="text-white text-xl font-semibold">
            Product
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
          <a className="px-5 py-2 bg-[#488ddb] rounded-md text-white text-xl font-semibold">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
