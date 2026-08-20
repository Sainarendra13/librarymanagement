import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <nav className="navbar">

      <h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajOeZh9qgG5TKxag45URzmQGfwZybYQT0s-B0prcksi1CEMaZvTuoeZ8&s=10" />
        Library Management
      </h2>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </nav>
  );
}

export default Navbar;