import React from "react";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { logOut } from "../../Actions/Index";
import routerHistory from "../../Util/routerHistory";

class Auth extends React.Component {
  handlelogout = () => {
    const history = routerHistory;
    this.props.logOut();
    history.push("/");
  };

  btnHandler = () => {
    if (this.props.isLoggedIn) {
      return (
        <GoogleLogout
          theme="light"
          clientId={`1021073274418-81ienqfhbevgg6qf55krn9b177jnss3k.apps.googleusercontent.com`}
          buttonText="Sign Out"
          onLogoutSuccess={() => this.handlelogout()}
        ></GoogleLogout>
      );
    }
  };
  render() {
    return <div>{this.btnHandler()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};
export default connect(mapStateToProps, { logOut })(Auth);
