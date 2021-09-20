import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [currentPage, setCurrentPage] = useState("Login");
  const [currentLink, setCurrentLink] = useState("login");
  const clickHandler = (e) => {
    setCurrentLink(e.target.id);
    setCurrentPage(e.target.attributes.label.value);
  };
  const isActive = (link) => {
    let out = "NavBtn border";
    out += currentLink === link ? " NavBtnActive" : "";
    return out;
  };
  return (
    <div className="p-1 flex justify-between newfont">
      <div className="text-2xl">{currentPage}</div>
      <div className="space-x-2">
        <Link className="NavLink" to="/login">
          <button
            className={isActive("login")}
            label="Login Page"
            id="login"
            onClick={clickHandler}
          >
            Login
          </button>
        </Link>

        <Link className="NavLink" to="/register">
          <button
            className={isActive("register")}
            label="Register Page"
            id="register"
            onClick={clickHandler}
          >
            Register
          </button>
        </Link>
        <Link className="NavLink" to="/userlist">
          <button
            className={isActive("list")}
            label="User List Page"
            id="list"
            onClick={clickHandler}
          >
            List Users
          </button>
        </Link>
      </div>
    </div>
  );
}
