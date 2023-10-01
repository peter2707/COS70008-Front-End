import React, { useState } from "react";
import "./AdminDashboard.css";

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
                    {collapsed ? ">>" : "<<"}
                </button>
                <h3>Admin Name</h3>
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
                {/* Example: Display content based on selected section */}
                {selected === "dashboard" && <div>Dashboard Content</div>}
                {selected === "stats" && <div>Stats and Insight Content</div>}
                {/* ... similarly for other sections */}
            </div>
        </div>
    );
};

export default AdminDashboard;
