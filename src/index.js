import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Learn, { loader as topicLoader } from "./components/Learn/Learn";
import Support from "./components/Support/Support";
import LogIn from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import TopicContent, {
  loader as contentLoader,
} from "./components/Learn/TopicContent";
import { isAuthenticated } from "./utils/isAuthenticated";

const PrivateRoute = ({ element }) => {
  // Check if the user is authenticated
  const isUserAuthenticated = isAuthenticated();

  if (!isUserAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // Render the Layout component with or without the navbar
  return <Layout>{element}</Layout>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: (
          <Layout showNavbar={true}>
            <Home />
          </Layout>
        ),
      },
      {
        path: "/",
        element: (
          <Layout showNavbar={true}>
            <Navigate to="/home" />
          </Layout>
        ),
      },
      {
        path: "learn",
        element: (
          <Layout showNavbar={true}>
            <Learn />
          </Layout>
        ),
        loader: topicLoader,
        children: [
          {
            path: ":subTopicContentId",
            element: <TopicContent />,
            loader: contentLoader,
          },
        ],
      },
      {
        path: "support",
        element: (
          <Layout showNavbar={true}>
            <Support />
          </Layout>
        ),
      },
      {
        path: "about",
        //element: <About />,
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
        path: "admindashboard",
        element: <AdminDashboard />,
      },
      {
        path: "userdashboard",
        element: (
          <Layout showNavbar={true}>
            <UserDashboard />
          </Layout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
