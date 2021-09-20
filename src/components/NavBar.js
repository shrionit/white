import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="p-1 flex space-x-2 justify-end newfont">
      <Link className="NavLink" to="/login">
        <button className="NavBtn">Login</button>
      </Link>

      <Link className="NavLink" to="/register">
        <button className="NavBtn">Register</button>
      </Link>
      <Link className="NavLink" to="/userlist">
        <button className="NavBtn">List Users</button>
      </Link>
    </div>
  );
}
