import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaPen } from "react-icons/fa";
import "./User.css";

export function Users() {
    const [users, setUsers] = useState([]);
    const [displayedUsers, setDisplayedUsers] = useState([]);
    const [roleFilter, setRoleFilter] = useState("User");
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearchFeedback, setShowSearchFeedback] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await axios.get('https://my-json-server.typicode.com/peter2707/hiv_selftest_api/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setUsers(response.data);
                setDisplayedUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching the users", error);
            }
        }

        fetchUserData();
    }, []);

    const handleSwitch = (role) => {
        setRoleFilter(role);
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowEditPopup(true);
    };

    const handleClosePopup = () => {
        setSelectedUser(null);
        setShowEditPopup(false);
    };

    const handleSearch = () => {
        if (searchTerm) {
            const filtered = users.filter(
                (user) => 
                    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.id.toString() === searchTerm
            );
            setDisplayedUsers(filtered);
            setShowSearchFeedback(true);
        } else {
            setDisplayedUsers(users);
            setShowSearchFeedback(false);
        }
    };

    const filteredUsers = displayedUsers.filter(
        (user) => user.type === roleFilter.toLowerCase()
    );

    return (
        <div className="user-container">
            <h1>All Users</h1>
            <div className="user-group-switch">
                <div
                    className={`switch-option ${
                        roleFilter === "User" ? "selected" : ""
                    }`}
                    onClick={() => handleSwitch("User")}
                >
                    User
                </div>
                <div
                    className={`switch-option ${
                        roleFilter === "Admin" ? "selected" : ""
                    }`}
                    onClick={() => handleSwitch("Admin")}
                >
                    Admin
                </div>
            </div>
            <hr />
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by name, email or ID..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setShowSearchFeedback(false);
                    }}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {showSearchFeedback && searchTerm && (
                <div className="search-feedback">
                    Showing results for "{searchTerm}"
                </div>
            )}
            <table className="users-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Email Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                    className="edit-btn"
                                    onClick={() => handleEdit(user)}
                                >
                                    <FaPen className="text-xl" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showEditPopup && (
                <EditUserPopup user={selectedUser} onClose={handleClosePopup} />
            )}
        </div>
    );
}

function EditUserPopup({ user, onClose }) {
    const [editedUser, setEditedUser] = useState({ ...user });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated User:", editedUser);
        onClose();
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <h3>Edit User</h3>
                <form onSubmit={handleSubmit} className="edit-form">
                    <div className="form-group">
                        <label htmlFor="userName">Username:</label>
                        <input
                            type="text"
                            id="userName"
                            value={editedUser.name}
                            onChange={(e) =>
                                setEditedUser({
                                    ...editedUser,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userEmail">Email Address:</label>
                        <input
                            type="email"
                            id="userEmail"
                            value={editedUser.email}
                            onChange={(e) =>
                                setEditedUser({
                                    ...editedUser,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userId">User ID:</label>
                        <input
                            type="text"
                            id="userId"
                            value={editedUser.id}
                            readOnly
                        />
                    </div>
                    <div className="form-actions">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}