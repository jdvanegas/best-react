import { Route } from "react-router";
import SinginPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SignupPage";

const authRoutes: JSX.Element[] = [
  <Route key="signin" path="/iniciar-sesion/:redirect?" component={SinginPage} />,
  <Route key="signup" path="/registrarse" component={SignupPage} />,
];

export default authRoutes;
