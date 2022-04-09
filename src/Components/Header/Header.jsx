import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import CubeLogo from "../../Assets/Logo/CubeLogo.svg";
import Auth from "../Auth/Auth";

function Header() {
  return (
    <div className="ui inverted segment header">
      <div className="ui inverted secondary menu">
        <div className="item header-logo-box">
          <Link to="/">
            <img src={CubeLogo} alt="logo" className="header-logo" />
          </Link>
        </div>
        <Link className="item" to="/">
          Stream
        </Link>
        <Link className="item" to="/">
          Watch
        </Link>

        <div className="right item header-btn">
          <Auth></Auth>
        </div>
      </div>
    </div>
  );
}
export default Header;
