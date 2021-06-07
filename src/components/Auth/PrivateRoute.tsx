import React, { useEffect } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

const PrivateRoute = ({ roles, children, ...rest }: any) => {
  const { user, isAuthenticated } = useAuth();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated)
      history.push(`/iniciar-sesion/${encodeURIComponent(location.pathname)}`);
    else {
      if (roles && !roles.includes(user?.roleName)) history.push(`/no-autorizado`);
    }
  }, [user, isAuthenticated, history, location, roles]);

  return <Route {...rest} render={() => children} />;
};

export default PrivateRoute;
