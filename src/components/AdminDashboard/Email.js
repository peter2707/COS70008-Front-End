import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaPen } from "react-icons/fa";
import "./User.css";
import "./Email.css";

export function Email() {
    const [users, setUsers] = useState([]);
    const [displayedUsers, setDisplayedUsers] = useState([]);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchEmailReminderUsers = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get('http://localhost:3000/admin/email-reminder-users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setUsers(response.data);
                setDisplayedUsers(response.data);
            } catch (error) {
                console.error("Error fetching the users", error);
            }
        }

        fetchEmailReminderUsers();
    }, []);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowEditPopup(true);
    };

    const handleClosePopup = () => {
        setSelectedUser(null);
        setShowEditPopup(false);
    };

    const handleSearch = () => {
        const filteredUsers = users.filter(user =>
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.id.toString().includes(searchTerm)
        );
        setDisplayedUsers(filteredUsers);
    };

    return (
        <div className="email-container">
            <h1>Email Reminders</h1>
            <hr />
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by email or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Email Address</th>
                        <th>Email Frequency</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayedUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.emailFrequency}</td>
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
                <EditEmailFrequencyPopup user={selectedUser} onClose={handleClosePopup} />
            )}
        </div>
    );
}

function EditEmailFrequencyPopup({ user, onClose }) {
    const [frequency, setFrequency] = useState(user.emailFrequency);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to update the user's email frequency in the backend
        // axios.put('UPDATE ENDPOINT HERE', { userId: user.id, emailFrequency: frequency });
        onClose();
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <h5>Edit Email Frequency</h5>
                <hr />
                <br />
                <form onSubmit={handleSubmit}>
                    <label>
                        Email Frequency:
                        <select className="email-select" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </label>
                    <div className="popup-actions">
                        <button type="submit" className="submit-btn">Update</button>
                        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
