import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const registerUrl = "http://localhost:3000/register";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Register() {
    const UserRole = {
        USER: "user",
        ADMIN: "admin",
    };

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const validateUser = () => {
        let isValid = true;
        const newErrors = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        };

        if (username.length === 0) {
            newErrors.username = "Please enter your name";
            isValid = false;
        } else if (username.length > 20) {
            newErrors.username = "Only 20 characters are allowed";
            isValid = false;
        }

        if (email.length === 0) {
            newErrors.email = "Please enter your email";
            isValid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
            isValid = false;
        }

        if (password.length === 0) {
            newErrors.password = "Create a strong password for your account";
            isValid = false;
        } else if (!validatePassword(password)) {
            newErrors.password =
                "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number";
            isValid = false;
        }

        if (confirmPassword.length === 0) {
            newErrors.confirmPassword = "Please confirm your password";
            isValid = false;
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Password do not match";
            isValid = false;
        }

        setErrors(newErrors);

        return isValid;
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!validateUser()) {
            return;
        }

        try {
            await axios.post(
                registerUrl,
                {
                    username,
                    email,
                    password,
                    role: UserRole.USER,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setErrorMessage("");
            navigate("/login");
        } catch (error) {
            console.error("An error occurred while registering:", error);
            setErrorMessage(error.response.data);
        }
    };

    return (
        <section className="register flex justify-center items-center h-screen bg-white max-w-lg mx-auto">
            <div className="register-container bg-white text-center border-2 rounded-2xl p-8 mx-4">
                <div className="absolute bg-gray-100 p-2 rounded-md cursor-pointer hover:bg-primaryLight">
                    <Link to="/login">
                        <img
                            title="Back to login"
                            className="w-6 h-6"
                            src="assets/icons/left-arrow.svg"
                            alt="Back to Login"
                        />
                    </Link>
                </div>
                <div className="header-wrapper mb-8">
                    <h1 className="text-3xl">Create your account</h1>
                    <p className="w-3/4 mx-auto mt-4">
                        Join the movement for better health and awareness by
                        joining our community
                    </p>
                </div>

                <form
                    className="register-form text-left"
                    onSubmit={handleRegister}
                >
                    <div className="inputs-container">
                        <div className="username-input mb-2 p-2">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={username}
                                className={classNames(
                                    "w-full bg-gray-100 text-sm rounded-md placeholder-gray-500 p-4",
                                    errors.username
                                        ? "border border-red-500"
                                        : ""
                                )}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && (
                                <p className="text-red-500 text-xs my-1">
                                    {errors.username}
                                </p>
                            )}
                        </div>

                        <div className="email-input mb-2 p-2">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email address"
                                value={email}
                                className={classNames(
                                    "w-full bg-gray-100 text-sm rounded-md placeholder-gray-500 p-4",
                                    errors.email ? "border border-red-500" : ""
                                )}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs my-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="password-input mb-2 p-2">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                className={classNames(
                                    "w-full bg-gray-100 text-sm rounded-md placeholder-gray-500 p-4",
                                    errors.password
                                        ? "border border-red-500"
                                        : ""
                                )}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs my-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div className="confirm-password-input mb-2 p-2">
                            <input
                                type="password"
                                name="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                className={classNames(
                                    "w-full bg-gray-100 text-sm rounded-md placeholder-gray-500 p-4",
                                    errors.confirmPassword
                                        ? "border border-red-500"
                                        : ""
                                )}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs my-1">
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>

                        {errorMessage && (
                            <p className="text-center text-red-500">
                                {errorMessage}
                            </p>
                        )}
                    </div>

                    <div className="lower-content text-center mt-5 p-2">
                        <button
                            className="w-full bg-primary hover:bg-blue-600 text-white font-medium text-center rounded-full py-3 px-4"
                            type="submit"
                        >
                            Register
                        </button>

                        <p className="text-sm mt-5 mb-3 text-gray-600">
                            Already have an account?
                        </p>

                        <Link className="link" to="/login">
                            Log In
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}
