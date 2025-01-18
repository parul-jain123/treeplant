


import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaLeaf,
  FaUserPlus,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isSignupDropdownOpen, setIsSignupDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
    if (isSignupDropdownOpen) setIsSignupDropdownOpen(false); // Close Signup if Login is open
  };

  const toggleSignupDropdown = () => {
    setIsSignupDropdownOpen(!isSignupDropdownOpen);
    if (isLoginDropdownOpen) setIsLoginDropdownOpen(false); // Close Login if Signup is open
  };

  return (
    <nav className="bg-green-800 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl font-bold">
          <FaLeaf className="text-yellow-300 mr-2" />
          TreeShop
        </Link>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-yellow-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link to="/logout" className="flex items-center space-x-1 hover:text-yellow-300">
                <FaSignOutAlt />
                <span>Logout</span>
              </Link>
            </li>
          ) : (
            <>
              <li className="relative">
                <button
                  onClick={toggleLoginDropdown}
                  className="flex items-center space-x-1 hover:text-yellow-300"
                >
                  <FaUser />
                  <span>Login</span>
                </button>
                {isLoginDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white text-green-800 shadow-md rounded-md mt-1 w-36">
                    <li>
                      <Link
                        to="/LoginPage"
                        className="block px-4 py-2 hover:bg-green-800 hover:text-white"
                        onClick={() => setIsLoginDropdownOpen(false)}
                      >
                        User Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AdminLogin"
                        className="block px-4 py-2 hover:bg-green-800 hover:text-white"
                        onClick={() => setIsLoginDropdownOpen(false)}
                      >
                        Admin Login
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={toggleSignupDropdown}
                  className="flex items-center space-x-1 hover:text-yellow-300"
                >
                  <FaUserPlus />
                  <span>Signup</span>
                </button>
                {isSignupDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white text-green-800 shadow-md rounded-md mt-1 w-36">
                    <li>
                      <Link
                        to="/SignupPage"
                        className="block px-4 py-2 hover:bg-green-800 hover:text-white"
                        onClick={() => setIsSignupDropdownOpen(false)}
                      >
                        User Signup
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AdminSignUp"
                        className="block px-4 py-2 hover:bg-green-800 hover:text-white"
                        onClick={() => setIsSignupDropdownOpen(false)}
                      >
                        Admin Register
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}
        </ul>

        {/* Cart Icon for Desktop */}
        <div className="hidden md:flex relative">
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Navbar Links */}
      {isMenuOpen && (
        <ul className="md:hidden bg-green-800 text-white flex flex-col space-y-4 px-4 py-4 shadow-md">
          <li>
            <Link to="/" className="hover:text-yellow-300" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-yellow-300" onClick={toggleMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link
                to="/logout"
                className="flex items-center space-x-1 hover:text-yellow-300"
                onClick={toggleMenu}
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <button
                  onClick={toggleLoginDropdown}
                  className="flex items-center space-x-1 hover:text-yellow-300"
                >
                  <FaUser />
                  <span>Login</span>
                </button>
                {isLoginDropdownOpen && (
                  <ul className="bg-white text-green-800 shadow-md rounded-md mt-1">
                    <li>
                      <Link
                        to="/LoginPage"
                        className="block px-4 py-2 hover:bg-green-800 hover:text-white"
                        onClick={toggleMenu}
                      >
                        User Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AdminLogin"
                        className="block px-4 py-2 hover:bg-green-800 hover:text-white"
                        onClick={toggleMenu}
                      >
                        Admin Login
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  onClick={toggleSignupDropdown}
                  className="flex items-center space-x-1 hover:text-yellow-300"
                >
                  <FaUserPlus />
                  <span>Signup</span>
                </button>
                {isSignupDropdownOpen && (
                  <ul className="bg-white text-green-800 shadow-md rounded-md mt-1">
                    <li>
                      <Link
                        to="/SignupPage"
                        className="block px-4 py-2 hover:bg-green-800 hover:text-white"
                        onClick={toggleMenu}
                      >
                        User Signup
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AdminSignUp"
                        className="block px-4 py-2 hover:bg-green-800 hover:text-white"
                        onClick={toggleMenu}
                      >
                        Admin Register
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}
          <li>
            <Link to="/cart" className="flex items-center" onClick={toggleMenu}>
              <FaShoppingCart className="text-2xl" />
              {cartCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
