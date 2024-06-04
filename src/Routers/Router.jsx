import { createBrowserRouter } from "react-router-dom";
import Root from "../LAyout/Root";
import Home from "../Pages/Home";
import Hotels from "../Pages/Hotels";
import Resorts from "../Pages/Resorts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import HotelDetails from "../Pages/HotelDetails";
import ResortDetails from "../Pages/ResortDetails";
import ErrorPage from "../Pages/ErrorPage";
import MyBookings from "../Pages/MyBookings";
import MyWishlists from "../Pages/MyWishlists";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Hotels.json")
      },
      {
        path: "Hotels",
        element: <Hotels></Hotels>,
        loader: () => fetch("https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Hotels.json")
      },
      {
        path: "/Hotels/:id",
        element: <PrivateRoute><HotelDetails></HotelDetails></PrivateRoute>,
        loader: () => fetch("https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Hotels.json")
      },
      {
        path: "/Resorts",
        element: <Resorts></Resorts>,
        loader: ()=> fetch('https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Resorts.json')
      },
      {
        path: "/Resorts/:id",
        element: <PrivateRoute><ResortDetails></ResortDetails></PrivateRoute>,
        loader: ()=> fetch('https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Resorts.json')
      },
      {
        path: "/MyBookings",
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path: "/MyWishlists",
        element: <PrivateRoute><MyWishlists></MyWishlists></PrivateRoute>
      },
      {
        path: "/UpdateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/Register",
        element: <Register></Register>
      },
    ]
    },
  ]);

export default router;