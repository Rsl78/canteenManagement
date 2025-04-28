import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/image/logo.png"

// const Navbar = ({ theme }) => {
const Navbar = () => {
  return (
    // <div
    //   className={`navbar fixed top-0 left-0 right-0 z-50 ${
    //     theme === "glass"
    //       ? "bg-black-100/20 backdrop-blur-xs text-white"
    //       : "bg-base-100 text-black"
    //   }  shadow-sm`}
    // >
    <div className="navbar shadow-sm fixed top-0 left-0 right-0 z-50 bg-green-900/20 backdrop-blur-xs text-white">
      <div className="container flex mx-auto">
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
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="menu-item-active">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-dark-emerald" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-transparent active:bg-transparent active:text-current">
                <NavLink
                  to="/menu"
                  className={({ isActive }) => (isActive ? "text-dark-emerald" : "")}
                >
                  Menu
                </NavLink>
              </li>
              <li className="hover:bg-transparent active:bg-transparent active:text-current">
                <NavLink
                  to="/cart"
                  className={({ isActive }) => (isActive ? "text-dark-emerald" : "")}
                >
                  Cart
                </NavLink>
              </li>
              <li className="hover:bg-transparent active:bg-transparent active:text-current">
                <NavLink
                  to="/order"
                  className={({ isActive }) => (isActive ? "text-dark-emerald" : "")}
                >
                  Order
                </NavLink>
              </li>
            </ul>
          </div>
          {/*<a className="btn btn-ghost text-xl">daisyUI</a>*/}
          <img className={"h-12 w-12"} src={logo}/>
        </div>

        <div className="navbar-end">
          <div className="flex justify-center items-center">
            <ul className="menu menu-horizontal px-1 text-base font-semibold hidden lg:flex lg:flex-row">
              <li className="menu-item-active">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-dark-emerald" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-transparent active:bg-transparent active:text-current">
                <NavLink
                  to="/menu"
                  className={({ isActive }) => (isActive ? "text-dark-emerald" : "")}
                >
                  Menu
                </NavLink>
              </li>
              <li className="hover:bg-transparent active:bg-transparent active:text-current">
                <NavLink
                  to="/cart"
                  className={({ isActive }) => (isActive ? "text-dark-emerald" : "")}
                >
                  Cart
                </NavLink>
              </li>
              <li className="hover:bg-transparent active:bg-transparent active:text-current">
                <NavLink
                  to="/order"
                  className={({ isActive }) => (isActive ? "text-dark-emerald" : "")}
                >
                  Order
                </NavLink>
              </li>
            </ul>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10  rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
