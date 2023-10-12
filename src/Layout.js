// Layout.js
import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const Layout = ({ children, showNavbar }) => {
  return (
    <div>
      {showNavbar && <NavigationBar />}
      {children}
    </div>
  );
};

export default Layout;
