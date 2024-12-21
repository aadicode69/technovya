import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div className="bg-slate-600 min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-3xl font-extrabold text-white cursor-pointer transition duration-300 ease-in-out hover:text-white/70">
            <Link to="#">TF Techfest</Link> 
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="#accommodation"
              className="text-white hover:text-white/70 transition duration-300 ease-in-out"
            >
              Accommodation
            </Link>
            <Link
              to="#events"
              className="text-white hover:text-white/70 transition duration-300 ease-in-out"
            >
              Events
            </Link>
            <Link
              to="#workshops"
              className="text-white hover:text-white/70 transition duration-300 ease-in-out"
            >
              Workshops
            </Link>
            <Link
              to="#competitions"
              className="text-white hover:text-white/70 transition duration-300 ease-in-out"
            >
              Competitions
            </Link>
            <Link
              to="#profile"
              className="text-white hover:text-white/70 transition duration-300 ease-in-out"
            >
              Profile
            </Link>
          </nav>

          <div>
            <button className="text-white border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition duration-300 ease-in-out">
              Sign In
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
