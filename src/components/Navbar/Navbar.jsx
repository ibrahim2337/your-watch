


const Navbar = () => {
  return (
    <div>
      <div className="navbar fixed h-24 z-50 bg-black bg-opacity-30 px-20">
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
                <a>Home</a>
                <a>Product</a>
                <a>Blogs</a>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <a  className="font-bold text-3xl hover:text-">Your Watch</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li className="text-white text-xl font-semibold">Home</li>
            <li className="text-white text-xl font-semibold">Product</li>
            <li className="text-white text-xl font-semibold">Blogs</li>
            <li className="text-white text-xl font-semibold">Contact Us</li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="px-3 py-2 bg-slate-400 rounded-md text-white text-xl font-semibold">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
