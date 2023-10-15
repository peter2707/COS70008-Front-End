// Layout.js
import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";

const Layout = ({ children, showNavbar, showFooter }) => {
  return (
    <div>
      {showNavbar && <NavigationBar />}
      {children}
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
