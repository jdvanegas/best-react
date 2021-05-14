import React from "react";
import { Switch } from "react-router-dom";
import globalRoutes from "./genaral-routes";

const routes: JSX.Element = (
  <Switch>{globalRoutes.map((route) => route)}</Switch>
);

export default routes;
