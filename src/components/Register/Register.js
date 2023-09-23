import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setError("Invalid email format.");
            return;
        }

        if (!validatePassword(password)) {
            setError(
                "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
            );
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Call the backend API to register
        const response = await fetch("BACKEND_API_REGISTER_URL", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
            // Redirect to the login page
            window.location.href = "/login";
        } else {
            // Display the error message from the backend
            setError(data.message);
        }
    };

    return (
        <div className="register-wrapper">
            <div className="register-container">
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit} className="register-form">
                    <h4 className="text-center">Create Your Account</h4>
                    <p className="text-center">
                        Join the movement for better health and awareness by
                        joining our community
                    </p>

                    <div className="input-container">
                        <input
                            type="email"
                            id="register-email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-container">
                        <input
                            type="password"
                            id="register-password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-container">
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Sign Up</button>
                    <p className="text-secondary text-center mt-5">
                        Already have an account?
                    </p>
                    <Link to="/login">
                        <div className="text-center">Log In</div>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
