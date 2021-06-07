import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

const Header = (): JSX.Element => {
  const auth = useAuth();
  const history = useHistory();
  const handleAuth = () => {
    if (auth.isAuthenticated) auth.signout();
    else history.push("/iniciar-sesion");
  };
  return (
    <header>
      <nav className="shadow">
        <ul>
          <li className="logo">
            <Link to="/">MICRO SHOPS</Link>
          </li>
          <li>
            <Link to="/">Tienda</Link>
          </li>
          <li>
            <Link to="/acerca-de">About</Link>
          </li>
          {auth.isAdmin && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
          <li className="auth" onClick={handleAuth}>
            {auth.isAuthenticated ? "Cerrar sesión" : "Iniciar sesión"}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
