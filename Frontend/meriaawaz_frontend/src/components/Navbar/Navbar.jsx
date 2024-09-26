import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/userSlice";

function Navbar() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await auth.signOut();
    dispatch(logoutUser());
  };
  return (
    <div className="meriaavaz_nav">
      <nav>
        <div className="wrapper">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <h1>X</h1>
            </label>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Problems_page"
                style={{ textDecoration: "none", color: "black" }}
              >
                Problems
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9644/9644994.png"
              alt="Menu"
              width={"30px"}
            />
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
