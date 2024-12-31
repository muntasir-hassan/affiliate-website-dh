import { React, useState } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css"; // Import Boxicons CSS

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#00175f] text-slate-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <i className="bx bx-globe"></i> My Website
        </div>
        <button
          className="text-slate-100 sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bx ${isOpen ? "bx-x" : "bx-menu"} text-2xl`}></i>
        </button>
        <nav
          className={`sm:flex flex-col sm:flex-row sm:space-x-6 items-center transition-all max-sm:absolute top-16 right-1 bg-[#00175f] px-6 duration-300 ${
            isOpen ? "block" : "hidden"
          } sm:block`}
        >
          <Link to="/" className="block sm:inline hover:text-blue-300 py-1">
            Home
          </Link>
          
          <Link
            to="/service"
            className="block sm:inline hover:text-blue-300 py-1"
          >
            Service
          </Link>
          <Link
            to="/blogs"
            className="block sm:inline hover:text-blue-300 py-1"
          >
            Blogs
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
