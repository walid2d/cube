import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import CubeLogo from "../../Assets/Logo/CubeLogo.svg";
import Auth from "../Auth/Auth";

class Header extends React.Component {
  renderCreateStream = () => {
    if (this.props.currentUser.isLoggedIn) {
      return (
        <li>
          <Link className="item" to="/stream/new">
            Create
          </Link>
        </li>
      );
    }
  };
  render() {
    return (
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl animate-pulse"
          >
            <img src={CubeLogo} alt="logo" className="header-logo" />
            Cube
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="item" to="/">
                Streams
              </Link>
            </li>
            {this.renderCreateStream()}
            <li>
              <Link className="item" to="/about">
                About
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
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth,
  };
};
export default connect(mapStateToProps)(Header);
