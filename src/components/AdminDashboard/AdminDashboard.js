import React, { useState } from "react";
import "./AdminDashboard.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// Import the individual components
import { Dashboard } from './Dashboard';
import { Users } from './Users';
import { ContentManagement } from './ContentManagement';
import { Email } from './Email';
import { Account } from './Account';

const AdminDashboard = () => {
    const [selected, setSelected] = useState("dashboard");
    const [collapsed, setCollapsed] = useState(false);

    const sections = [
        { id: "dashboard", name: "Dashboard" },
        { id: "users", name: "Users" },
        { id: "content", name: "Content Management" },
        { id: "email", name: "Email Reminder" },
        { id: "account", name: "Account Setting" },
    ];

    const renderContent = () => {
        switch (selected) {
            case "dashboard": return <Dashboard />;
            case "users": return <Users />;
            case "content": return <ContentManagement />;
            case "email": return <Email />;
            case "account": return <Account />;
            default: return null;
        }
    };

    const handleLogout = () => {
        const confirmed = window.confirm("Are you sure you want to log out?");
        if (confirmed) {
            //Log user out
            console.log("Logged out!");
        }
    };

    return (
        <div className="admin-container">
            <div className={`bg-primary adminSidebar ${collapsed ? "collapsed" : ""}`}>
                <button
                    className="toggle-btn"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <FaAngleRight className="text-xl" /> : <FaAngleLeft className="text-xl" />}
                </button>
                <h5>Admin Name</h5>
                <div className="side-btn-group">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={selected === section.id ? "active" : "adminSidebarBtn"}
                            onClick={() => setSelected(section.id)}
                        >
                            {section.name}
                        </button>
                    ))}
                </div>
                <div className="logout">
                    <button className="logout-btn" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
            <div className="main-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminDashboard;
