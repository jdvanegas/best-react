import React from "react";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/acerca-de">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
