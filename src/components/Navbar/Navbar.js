import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink to="/" exact>
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
