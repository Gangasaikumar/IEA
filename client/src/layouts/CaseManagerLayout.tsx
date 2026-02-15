import { Link, Outlet } from "react-router";

const CaseManagerLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/Case-Manager">Home</Link>
            </li>
            <li>
              <Link to="login">Case Manager Login</Link>
            </li>
            <li>
              <Link to="signup">Case Manager Signup</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default CaseManagerLayout;
