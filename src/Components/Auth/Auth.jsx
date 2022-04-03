import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { logIn, logOut } from "../../Actions/Index";

class Auth extends React.Component {
  handleFailure = (result) => {
    console.log(result);
  };
  handlelogin = (userData) => {
    console.log(userData.profileObj);
    this.props.logIn(userData.profileObj);
  };
  btnText = () => {
    const text = this.props.isLoggedIn ? "Sign Out" : "Sign in with Google";
    return text;
  };

  btnHandler = () => {
    if (this.props.isLoggedIn) {
      return (
        <GoogleLogout
          theme="dark"
          clientId={`1021073274418-81ienqfhbevgg6qf55krn9b177jnss3k.apps.googleusercontent.com`}
          buttonText={this.btnText()}
          onLogoutSuccess={() => this.props.logOut()}
        ></GoogleLogout>
      );
    } else {
      return (
        <GoogleLogin
          theme="dark"
          clientId={`1021073274418-81ienqfhbevgg6qf55krn9b177jnss3k.apps.googleusercontent.com`}
          buttonText={this.btnText()}
          onSuccess={this.handlelogin}
          onFailure={this.handleFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
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
export default connect(mapStateToProps, { logIn, logOut })(Auth);
