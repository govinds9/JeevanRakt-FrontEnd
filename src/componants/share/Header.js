import React from "react";
import {
  BiDonateBlood,
  BiSolidLogOutCircle,
  BiSolidUserCircle,
} from "react-icons/bi";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  // logout handler

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };
  return (
    <div>
      <nav className=" navbar ">
        <div className=" container-fluid ">
          <div className=" navbar-brand ">
            <BiDonateBlood color="red" /> JevanRakt
          </div>
          <ul className=" navbar-nav  flex-row ">
            <li className=" nav-item mx-3  ">
              <p className=" nav-link ">
                {" "}
                <BiSolidUserCircle color="white" /> Welcome{" "}
                {user?.name || user?.hospital || user?.organisationName} &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
                {/* user?.role == user && user.role */}
              </p>
            </li>
            {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className=" nav-item mx-3  ">
                <Link to="/analytics" className=" nav-link ">
                  Analytics
                </Link>
              </li>
            ) : (
              <li className=" nav-item mx-3  ">
                <Link to="/" className=" nav-link ">
                  Home
                </Link>
              </li>
            )}
            <li className=" nav-item mx-3 ">
              <button className=" btn  btn-danger " onClick={handleLogout}>
                <BiSolidLogOutCircle color="black" /> Logout
              </button>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
