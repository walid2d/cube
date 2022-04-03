import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import CubeLogo from "../../Assets/Logo/CubeLogo.svg";
import Auth from "../Auth/Auth";

function Header() {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={CubeLogo} alt="logo" className="header-logo" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link className="item" to="/">
              Stream
            </Link>
          </li>
          <li>
            <Link className="item" to="/">
              Watch
            </Link>
          </li>
          <li>
            <Auth />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
