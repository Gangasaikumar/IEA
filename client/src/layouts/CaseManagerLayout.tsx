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
              <Link to="/case-manager/login">Case Manager Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default CaseManagerLayout;
