import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import CubeLogo from "../../Assets/Logo/CubeLogo.svg";
import Auth from "../Auth/Auth";

class Header extends React.Component {
  renderCreateStream = () => {
    console.log(this.props.currentUser);

    if (this.props.currentUser.isLoggedIn) {
      return (
        <li>
          <Link className="btn btn-primary" to="/stream/new">
            Create
          </Link>
        </li>
      );
    }
  };
  renderUser = () => {
    const { isLoggedIn, userPfp, userName } = this.props.currentUser;
    if (isLoggedIn) {
      return (
        <div className="dropdown  dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar mx-2">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userPfp} alt="user profile picture" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52"
          >
            <li className="self-center">
              <h3 className="font-black">Hello! {userName}</h3>
            </li>
            <li className="self-center">
              <Auth />
            </li>
          </ul>
        </div>
      );
    }
  };

  render() {
    const { isLoggedIn } = this.props.currentUser;
    return (
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <Link
            to="/"
            className={`btn btn-ghost normal-case text-xl pl-0 font-black ${
              isLoggedIn ? "animate-pulse" : ""
            }`}
          >
            <img src={CubeLogo} alt="logo" className="header-logo " />
            Cube
          </Link>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="item font-bold" to="/">
                Streams
              </Link>
            </li>
            <li>
              <Link className="item font-bold" to="/about">
                About
              </Link>
            </li>
            {this.renderCreateStream()}
          </ul>
          {this.renderUser()}
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
