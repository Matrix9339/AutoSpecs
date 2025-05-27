import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Brand from "./pages/brands_nav/Brands";
import Contact from "./pages/contact/Contact";
import Forgetpw from "./pages/forgertpw/Forget";
import Login from "./pages/login/Login";
import Newuser from "./pages/newuser/Newuser";
import Category from "./pages/category/Category";
import Bmwcar from "./components/brandSlider/bmw/bmw_owns/Bmw_cars"
import AdminLogin from "./pages/Admin/AdminLoginForm";
import Admin from "./pages/Admin/Admin";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestDrive from "./pages/testDrive/TestDrive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/brand",
    element: <Brand />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/reset-password",
    element: <Forgetpw />,
  },
  {
    path: "/register-signup",
    element: <Newuser />,
  },
  {
    path: "/Bmw/Cars",
    element: <Bmwcar />,
  },
  {
    path: "/AdminLogin",
    element: <AdminLogin />,
  },
  {
    path: "/Admin",
    element: <Admin/>,
  },
  {
    path: "/test-drive",
    element: <TestDrive/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
