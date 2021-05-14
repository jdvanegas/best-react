import { Route } from "react-router";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import SinginPage from "../pages/SinginPage";
import PrivateRoute from "./PrivateRoute";

const globalRoutes: JSX.Element[] = [
  <Route key="home" exact path="/" component={HomePage} />,
  <PrivateRoute key="about" path="/acerca-de" component={AboutPage} />,
  <Route
    key="signin"
    path="/iniciar-sesion/:redirect?"
    component={SinginPage}
  />,
  <Route key="not-found" path="/*" component={NotFoundPage} />,
];

export default globalRoutes;
