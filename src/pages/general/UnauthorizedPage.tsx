import React from "react";
import { Link } from "react-router-dom";

const UnauthorizedPage = (): JSX.Element => {
  return (
    <div>
      <div className="container">
        <h1>401 No tienes acceso a esta página.</h1>
        <Link className="btn btn-secondary" to="/">
          Ir a la página de inicio
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
