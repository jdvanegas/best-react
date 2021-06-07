import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NotFoundPage = (): JSX.Element => {
  const location = useLocation();
  return (
    <div className="container">
      <h1>
        404 No se encotro la página <code>{location.pathname}</code>
      </h1>
      <Link className="btn btn-secondary" to="/">
        Ir a la página de inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
