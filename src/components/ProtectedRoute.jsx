function ProtectedRoute({ children }) {

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    window.location.href = "/login";
    return null;
  }

  return children;
}

export default ProtectedRoute;