import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser().then().catch();
  };
  const navbar = (
    <>
      <li>
        <NavLink className="mx-1" to={`/`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="mx-1" to={`/Hotels`}>
          Hotels
        </NavLink>
      </li>
      <li>
        <NavLink className="mx-1" to={`/Resorts`}>
          Resorts
        </NavLink>
      </li>
      {user && <li>
        <NavLink className="mx-1" to={`/MyBookings`}>
          My Bookings
        </NavLink>
      </li>}
      {user && <li>
        <NavLink className="mx-1" to={`/MyWishlists`}>
          My Wishlists
        </NavLink>
      </li>}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <a href="/" className="font-bold font-Fira  text-2xl lg:text-3xl text-orange-500">
            Backpackers<span className="text-black">.com</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbar}</ul>
        </div>
        <div className="navbar-end items-center gap-1">
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full">
                  <img alt="Profile" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    {user.displayName}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link to={`/UpdateProfile`}>Update Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}

          {!user && (
            <Link to={`/Login`} className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
