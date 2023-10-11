import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Learn from "./components/Learn/Learn";
import Support from "./components/Support/Support";
import LogIn from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Topic from "./components/Learn/Topic";
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout showNavbar={true} />}>
          <Route path="/" element={<Navigate to="home" />} />
          <Route index path="home" element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/:topicId" element={<Topic />} />
          <Route path="support" element={<Support />} />
          <Route
            path="user-dashboard"
            element={<PrivateRoute element={<UserDashboard />} />}
          />
        </Route>
        <Route path="/" element={<Layout showNavbar={false} />}>
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route
            path="admin-dashboard"
            element={<PrivateRoute element={<AdminDashboard />} />}
          />
        </Route>
        {/* Add additional routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
