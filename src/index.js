import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import LogIn from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Layout from "./components/Layout";
import Support from "./components/Support/Support";
import Home from "./components/Home/Home";
import Learn from "./components/Learn/Learn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="home" element={<Home />} />
                <Route path="learn" element={<Learn />} />
                <Route path="support" element={<Support />} />
                <Route path="login" element={<LogIn />} />
                <Route path="register" element={<Register />} />
                <Route path="userdashboard" element={<UserDashboard />} />
                <Route path="admindashboard" element={<AdminDashboard />} />
            </Route>
        </Routes>
    </HashRouter>
);

