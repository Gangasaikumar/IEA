import { Link, Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/admin">Home</Link>
            </li>
            <li>
              <Link to="login">Admin Login</Link>
            </li>
            <li>
              <Link to="signup">Admin Signup</Link>
            </li>
            <li>
              <Link to="dashboard">Admin Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
