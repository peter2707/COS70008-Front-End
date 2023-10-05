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
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminDashboard;
