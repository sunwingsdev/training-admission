import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import AdmissionStudent from "../pages/Dashboard/AdmissionStudent/AdmissionStudent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ path: "admission-student", element: <AdmissionStudent /> }],
  },
]);
export default Router;
