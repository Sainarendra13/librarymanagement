import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>

          <li>
            <NavLink to="/dashboard">
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/books">
              Books
            </NavLink>
          </li>

          <li>
            <NavLink to="/members">
              Members
            </NavLink>
          </li>

          <li>
            <NavLink to="/transactions">
              Transactions
            </NavLink>
          </li>

        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;