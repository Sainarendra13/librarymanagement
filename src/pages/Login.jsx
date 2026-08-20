import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "") {
      setError("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    if (password === "") {
      setError("Password is required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const savedUser = JSON.parse(
      localStorage.getItem("libraryUser")
    );

    if (
      savedUser &&
      email === savedUser.email &&
      password === savedUser.password
    ) {
      setError("");

      localStorage.setItem("isLoggedIn", "true");

      window.location.href = "/dashboard";
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Library Management</h1>

        <p>Admin Login</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;