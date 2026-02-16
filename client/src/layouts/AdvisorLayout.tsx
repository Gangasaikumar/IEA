import { Link, Outlet } from "react-router";

const AdvisorLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/advisor">Home</Link>
            </li>
            <li>
              <Link to="/advisor/login">Advisor Login</Link>
            </li>
            <li>
              <Link to="/advisor/signup">Advisor Signup</Link>
            </li>
            <li>
              <Link to="/advisor/dashboard">Advisor Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default AdvisorLayout;
