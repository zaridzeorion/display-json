import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <h3 className="logo">
        <Link to="/">React Mini Blog</Link>
      </h3>

      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
