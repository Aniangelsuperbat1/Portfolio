import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex, items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Patrick
          </NavLink>
          <NavLink to="/BlogPost">Blog Posts</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/about">About Me!</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
