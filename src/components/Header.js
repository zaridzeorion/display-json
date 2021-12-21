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
          <li>
            <Link to="/sign-in">Sign in</Link>
          </li>
        </ul>
      </nav>

      <Link className="cta" to="/sign-up">
        <button>Sign up</button>
      </Link>
    </header>
  );
};

export default Header;
