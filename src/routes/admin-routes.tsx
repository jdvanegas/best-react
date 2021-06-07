import DashboardPage from "../pages/admin/DashboardPage";
import PrivateRoute from "../components/Auth/PrivateRoute";

const adminRoutes: JSX.Element[] = [
  <PrivateRoute
    roles={["admin", "store"]}
    key="admin"
    path="/admin"
    component={DashboardPage}
  />,
];

export default adminRoutes;
