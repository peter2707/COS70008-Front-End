import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // at least 8 characters, 1 uppercase, 1 lowercase, 1 number
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

        // Call the backend API to validate credentials
        const response = await fetch("BACKEND_API_URL", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
            // Redirect to the user dashboard
            window.location.href = "/dashboard";
        } else {
            // Display the error message from the backend
            setError(data.message);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit} className="login-form">
                    <h4 className="text-center">Welcome Back!</h4>
                    <br />
                    <p className="text-center">
                        Please use the form below to log in to your account.
                    </p>
                    <br />
                    <div className="input-container">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-container">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Log In</button>
                    <p className="text-secondary text-center mt-5">
                        Don't have an account?
                    </p>
                    <br />
                    <Link to="/register">
                        <div className="text-center">Sign Up</div>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
