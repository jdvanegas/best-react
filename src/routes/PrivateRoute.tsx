import React, { useEffect } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const PrivateRoute = ({ children, ...rest }: any) => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    if (!auth.isAuthenticated)
      history.push(`/iniciar-sesion/${encodeURIComponent(location.pathname)}`);
  }, [auth, history]);

  return <Route {...rest} render={() => children} />;
};

export default PrivateRoute;
