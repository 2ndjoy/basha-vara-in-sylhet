import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";

import Item3 from "../Components/Item3";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import Services from "../Components/Services";
import CheckDetails from "../Components/CheckDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkDetails",
        element: <CheckDetails></CheckDetails>,
      },
    ],
  },
]);

export default router;
