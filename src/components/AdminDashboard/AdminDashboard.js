import React, { useState } from "react";
import "./AdminDashboard.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const AdminDashboard = () => {
    const [selected, setSelected] = useState("dashboard");
    const [collapsed, setCollapsed] = useState(false);

    const sections = [
        { id: "dashboard", name: "Dashboard" },
        { id: "stats", name: "Stats and Insight" },
        { id: "content", name: "Content Management" },
        { id: "email", name: "Email Reminder" },
        { id: "account", name: "Account Setting" },
    ];

    return (
        <div className="admin-container">
            <div className={`adminSidebar ${collapsed ? "collapsed" : ""}`}>
                <button
                    className="toggle-btn"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <FaAngleRight className="text-xl" /> : <FaAngleLeft className="text-xl" />}
                </button>
                <h5>Admin Name</h5>
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className={selected === section.id ? "active" : ""}
                        onClick={() => setSelected(section.id)}
                    >
                        {section.name}
                    </button>
                ))}
                <button className="signout-btn">Sign Out</button>
            </div>
            <div className="main-content">
                {selected === "dashboard" && <div>Dashboard Content</div>}
                {selected === "stats" && <div>Stats and Insight Content</div>}
                {selected === "content" && <div>Content Management</div>}
                {selected === "email" && <div>Email Reminder</div>}
                {selected === "account" && <div>Account Setting</div>}
            </div>
        </div>
    );
};

export default AdminDashboard;
