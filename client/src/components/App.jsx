import React from "react";
import MyNavbar from "./Navbar/MyNavbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Shoes from "./Pages/Shoes";
import Electronic from "./Pages/Electronic";
import Clothes from "./Pages/Clothes";
import Misc from "./Pages/Misc";
import Furniture from "./Pages/Furniture";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import SingleProduct from "./Products/SingleProduct";
import Success from "./Payment/Success";
import Cancel from "./Payment/Cancel";

const Layout = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/electronic",
        element: <Electronic />,
      },
      {
        path: "/clothes",
        element: <Clothes />,
      },
      {
        path: "/furniture",
        element: <Furniture />,
      },
      {
        path: "/misc",
        element: <Misc />,
      },

      {
        path: "/shoes",
        element: <Shoes />,
      },
      {
        path: "/:id",
        element: <SingleProduct />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default function App() {
  return (
    <div className="big-container">
      <RouterProvider router={router} />
    </div>
  );
}
