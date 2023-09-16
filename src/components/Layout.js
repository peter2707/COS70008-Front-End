import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import Footer from "./Footer/Footer";

const Layout = () => {
    return (
        <>
            <NavigationBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
