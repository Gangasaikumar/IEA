import { Link, Outlet } from "react-router";

const ClientLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/client">Home</Link>
            </li>
            <li>
              <Link to="/client/login">Client Login</Link>
            </li>
            <li>
              <Link to="/client/signup">Client Signup</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ClientLayout;
