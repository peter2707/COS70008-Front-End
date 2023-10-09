import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const loginUrl = "http://localhost:3000/login";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validateUser = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    if (email.length === 0) {
      newErrors.email = "Please enter your email";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (password.length === 0) {
      newErrors.password = "Please enter your password";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateUser()) {
      return;
    }

    try {
      const response = await axios.post(loginUrl, { email, password });
      const { data } = response;

      const { token, name, role } = data[0];
      localStorage.setItem("token", token); // Store the token in local storage
      localStorage.setItem("name", name); // Store user info in case needed
      localStorage.setItem("role", role);
      console.log("Login successful");
      setErrorMessage("");
      navigate("/user-dashboard");
      return true; // Login successful
    } catch (error) {
      console.error("An error occurred while logging in:", error);
      setErrorMessage(error.response.data);
      return false
    }
  };

  return (
    <section className="login flex justify-center items-center h-screen bg-white max-w-6xl mx-auto">
      <div className="login-container max-h-min flex flex-row bg-white text-center shadow-lg rounded-2xl mx-8">
        <div className="left p-4 md:p-8 md:w-3/4 mx-auto">
          <div className="absolute bg-gray-100 p-2 rounded-md cursor-pointer hover:bg-primaryLight">
            <Link to="/home">
              <img
                title="Back to home"
                className="w-6 h-6"
                src="assets/icons/left-arrow.svg"
                alt="Back to Home"
              />
            </Link>
          </div>
          <div className="header-wrapper">
            <h1 className="text-3xl px-20">Access Your Dashboard</h1>
            <img
              className="w-1/2 mx-auto"
              src="assets/images/login.svg"
              alt="Login"
            />
          </div>

          <form className="login-form text-left" onSubmit={handleLogin}>
            <div className="inputs-container">
              <div className="email-input mb-4">
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
                  <p className="text-red-500 text-xs my-1">{errors.email}</p>
                )}
              </div>

              <div className="password-input mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  className={classNames(
                    "w-full bg-gray-100 text-sm rounded-md placeholder-gray-500 p-4",
                    errors.password ? "border border-red-500" : ""
                  )}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs my-1">{errors.password}</p>
                )}
              </div>

              {errorMessage && (
                <p className="text-center text-red-500 my-2">{errorMessage}</p>
              )}
              <p className="link text-right p-2 cursor-pointer">
                Forgot your password?
              </p>
            </div>

            <div className="lower-content text-center mt-4 p-2">
              <button
                className="w-full bg-primary hover:bg-blue-600 text-white font-medium text-center rounded-md py-2"
                type="submit"
              >
                Log In
              </button>

              <p className="text-sm mt-6 my-2 text-gray-600">
                Don't have an account?
              </p>

              <Link className="link" to="/register">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
        <div className="right hidden md:flex items-center justify-center w-full bg-blue-50 rounded-e-xl">
          <img
            className="w-1/2 mx-auto"
            src="assets/images/login-image-right.svg"
            alt="Login"
          />
        </div>
      </div>
    </section>
  );
}