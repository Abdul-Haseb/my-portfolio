import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="flex justify-between items-center w-full px-4 fixed h-16 text-white bg-gradient-to-r from-black/70 to-black/90 z-50">
      <h1 className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#e7e7e7]  to-cyan-600 bg-clip-text text-transparent">
        Abdul Haseeb
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold text-gray-300 hover:scale-110 duration-200 hover:bg-gradient-to-r to-cyan-700 from-white bg-clip-text hover:text-transparent"
          >
            <Link
              to={link}
              smooth={true}
              duration={500} // Smooth scrolling duration
              offset={-70} // Offset for sticky navbar (adjust if necessary)
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div
        className="cursor-pointer md:hidden z-10 text-gray-500"
        onClick={toggleMobileNav}
      >
        {mobileNav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-gradient-to-b from-black to-black/80 text-gray-300 transform transition-transform duration-500 ease-in-out ${
          mobileNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center h-full">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-3 text-2xl cursor-pointer capitalize hover:scale-110 rounded-md hover:underline hover:text-gray-400 underline-offset-2 duration-200"
              onClick={() => setMobileNav(false)} // Close mobile menu on link click
            >
              <Link
                to={link}
                smooth={true}
                duration={500} // Smooth scrolling duration
                offset={-70} // Adjust for sticky navbar
                onClick={() => setMobileNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
