import { Route } from "react-router";
import AboutPage from "../pages/general/AboutPage";
import HomePage from "../pages/general/HomePage";
import NotFoundPage from "../pages/general/NotFoundPage";
import PrivateRoute from "../components/Auth/PrivateRoute";
import UnauthorizedPage from "../pages/general/UnauthorizedPage";

const generalRoutes: JSX.Element[] = [
  <Route key="home" exact path="/" component={HomePage} />,
  <PrivateRoute key="about" path="/acerca-de" component={AboutPage} />,
  <Route key="unauthorized" path="/no-autorizado" component={UnauthorizedPage} />,
  <Route key="not-found" path="/*" component={NotFoundPage} />,
];

export default generalRoutes;
