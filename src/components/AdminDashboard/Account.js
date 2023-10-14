import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Account.css";

export function Account() {
    const [adminData, setAdminData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
    });
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    useEffect(() => {
        const fetchAdminDetails = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(
                    "http://localhost:3000/admin/account-details",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setAdminData(response.data);
            } catch (error) {
                console.error("Error fetching admin account details:", error);
            }
        };

        fetchAdminDetails();
    }, []);

    const handleAccountUpdate = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        try {
            await axios.put(
                "http://localhost:3000/admin/update-account",
                adminData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("Account details updated successfully!");
        } catch (error) {
            console.error("Error updating account details:", error);
            alert("Failed to update account details.");
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            alert("New passwords do not match.");
            return;
        }

        const token = localStorage.getItem("token");
        try {
            await axios.put(
                "http://localhost:3000/admin/change-password",
                {
                    oldPassword,
                    newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("Password changed successfully!");
        } catch (error) {
            console.error("Error changing password:", error);
            alert("Failed to change password.");
        }
    };

    return (
        <div>
            <div className="account-setting-section">
                <h2>Account Settings</h2>
                <br />
                <hr />
                <br />
                <form onSubmit={handleAccountUpdate}>
                    <label>
                        Admin ID:
                        <input type="text" value={adminData.id} readOnly />
                    </label>
                    <label>
                        First Name:
                        <input
                            type="text"
                            value={adminData.firstName}
                            onChange={(e) =>
                                setAdminData({
                                    ...adminData,
                                    firstName: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            value={adminData.lastName}
                            onChange={(e) =>
                                setAdminData({
                                    ...adminData,
                                    lastName: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={adminData.email}
                            onChange={(e) =>
                                setAdminData({
                                    ...adminData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        Role:
                        <input type="text" value={adminData.role} readOnly />
                    </label>

                    <button className="update-account-btn" type="submit">
                        Update Account
                    </button>
                </form>
            </div>

            <div className="change-password-section">
                <h3>Change Password</h3>
                <br />
                <hr />
                <br />
                <form onSubmit={handlePasswordChange}>
                    <label>
                        Current Password:
                        <input
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </label>
                    <label>
                        New Password:
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </label>
                    <label>
                        Confirm New Password:
                        <input
                            type="password"
                            value={confirmNewPassword}
                            onChange={(e) =>
                                setConfirmNewPassword(e.target.value)
                            }
                        />
                    </label>

                    <button className="change-password-btn" type="submit">Change Password</button>
                </form>
            </div>
        </div>
    );
}
