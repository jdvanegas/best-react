import React from "react";
import { Switch } from "react-router-dom";
import adminRoutes from "./admin-routes";
import authRoutes from "./auth-routes";
import generalRoutes from "./genaral-routes";

const routes: JSX.Element = (
  <Switch>
    {authRoutes}
    {adminRoutes}
    {generalRoutes}
  </Switch>
);

export default routes;
