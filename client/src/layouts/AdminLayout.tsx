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
              <Link to="/admin/login">Admin Login</Link>
            </li>
            <li>
              <Link to="/admin/dashboard">Admin Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
