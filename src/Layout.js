// Layout.js
import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = ({ children, showNavbar }) => {
  return (
    <div>
      {showNavbar && <NavigationBar />}
      {children}
      <Outlet />
    </div>
  );
};

export default Layout;
