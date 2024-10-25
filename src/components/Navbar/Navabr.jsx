import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ coinBalance }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 lg:w-11/12 mx-auto backdrop-blur-xl bg-opacity-5">
      <div className="flex items-center justify-between w-full md:hidden">
        {/* Logo */}
        <div>
          <img src="./logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Coin Section */}
        <div className="flex items-center space-x-2 border-2 p-2 border-gray-300 rounded-xl">
          <span className="text-white ">{coinBalance} Coins</span>
          <span>
            <img src="./coin.png" alt="Coin" className="h-6 w-6" />
          </span>
        </div>

        {/* Hamburger Icon */}
        <div>
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <i className="fa-solid fa-bars fa-lg text-white"></i>
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-between w-full items-center">
        <div>
          <img src="./logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        <ul className="flex space-x-8 text-gray-600">
          <li className="text-gray-400 font-medium hover:text-[#0BE58A]">
            <a href="#">Home</a>
          </li>
          <li className="text-gray-400 font-medium hover:text-[#0BE58A]">
            <a href="#">Fixer</a>
          </li>
          <li className="text-gray-400 font-medium hover:text-[#0BE58A]">
            <a href="#">Teams</a>
          </li>
          <li className="text-gray-400 font-medium hover:text-[#0BE58A]">
            <a href="#">Schedules</a>
          </li>
        </ul>

        {/* Coin Section */}
        <div className="flex items-center space-x-2 border-2 p-2 border-gray-300 rounded-xl">
          <span className="text-white ">{coinBalance} Coins</span>
          <span>
            <img src="./coin.png" alt="Coin" className="h-6 w-6" />
          </span>
        </div>
      </div>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-[#1D232A] md:hidden text-gray-600`}
      >
        <li className="text-gray-400 font-medium hover:text-[#0BE58A] p-2">
          <a href="#">Home</a>
        </li>
        <li className="text-gray-400 font-medium hover:text-[#0BE58A] p-2">
          <a href="#">Fixer</a>
        </li>
        <li className="text-gray-400 font-medium hover:text-[#0BE58A] p-2">
          <a href="#">Teams</a>
        </li>
        <li className="text-gray-400 font-medium hover:text-[#0BE58A] p-2">
          <a href="#">Schedules</a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  coinBalance: PropTypes.number.isRequired,
};

export default Navbar;
