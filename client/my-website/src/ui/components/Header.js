import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <h1>
          Muhammad <br /> Bin Ali :)
        </h1>
        <nav>
          <Link to="/">about</Link>
          <Link to="/projects">projects</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
