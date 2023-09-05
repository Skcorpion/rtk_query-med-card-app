import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="docs">Docs</NavLink>
          </li>
          <li>
            <NavLink to="settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;
