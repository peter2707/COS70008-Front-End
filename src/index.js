import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import LogIn from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Support from "./components/Support/Support";
import Learn from "./components/Learn/Learn";
import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: (
          <>
            <NavigationBar />
            <Home />
          </>
        ),
      },
      {
        path: "learn",
        element: (
          <>
            <NavigationBar />
            <Learn />
          </>
        ),
      },
      {
        path: "support",
        element: (
          <>
            <NavigationBar />
            <Support />
          </>
        ),
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "user-dashboard",
        element: <UserDashboard />,
      },
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
