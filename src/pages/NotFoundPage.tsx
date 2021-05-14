import React from "react";
import { useLocation } from "react-router";

const NotFoundPage = (): JSX.Element => {
  const location = useLocation();
  return (
    <div>
      <h1>
        404 No se encotro la página <code>{location.pathname}</code>
      </h1>
    </div>
  );
};

export default NotFoundPage;
