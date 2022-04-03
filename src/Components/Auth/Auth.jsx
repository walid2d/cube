import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    userName: null,
    tft: "",
  };
  handleFailure = (result) => {
    console.log(result);
  };
  handlelogin = (userData) => {
    console.log(userData.profileObj);
    this.setState({
      isLoggedIn: true,
      userName: userData.profileObj.givenName,
      tft: userData.profileObj.imageUrl,
    });
  };
  btnText = () => {
    const text = this.state.isLoggedIn ? "Sign Out" : "Sign in with Google";
    return text;
  };

  btnHandler = () => {
    if (this.state.isLoggedIn) {
      return (
        <GoogleLogout
          clientId={`1021073274418-81ienqfhbevgg6qf55krn9b177jnss3k.apps.googleusercontent.com`}
          buttonText={this.btnText()}
          onLogoutSuccess={() => this.setState({ isLoggedIn: false })}
        ></GoogleLogout>
      );
    } else {
      return (
        <GoogleLogin
          theme="light"
          clientId={`1021073274418-81ienqfhbevgg6qf55krn9b177jnss3k.apps.googleusercontent.com`}
          buttonText={this.btnText()}
          onSuccess={this.handlelogin}
          onFailure={this.handleFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      );
    }
  };

  //   showTft = () => {
  //     if (this.state.isLoggedIn) {
  //       return <img src={this.state.tft} />;
  //     }
  //   };

  render() {
    return <div>{this.btnHandler()}</div>;
  }
}
export default Auth;
