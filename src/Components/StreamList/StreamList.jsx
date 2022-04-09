import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStreams } from "../../Actions/Index";
import { logIn } from "../../Actions/Index";
import uuid from "react-uuid";
import glogo from "../../Assets/Logo/glogo.png";
import { GoogleLogin } from "react-google-login";
import Carousel from "../Carousel/Carousel";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }
  handleFailure = (result) => {
    console.log(result);
  };
  handleLogin = (userData) => {
    this.props.logIn(userData.profileObj);
    this.props.getStreams();
  };
  renderUser(stream) {
    if (
      stream.userid === this.props.currentUser.userId &&
      this.props.currentUser.isLoggedIn
    ) {
      return (
        <Fragment key={uuid()}>
          <div className="card-actions justify-center">
            <Link to={`stream/live/${stream.id}`} className="btn btn-primary">
              Go Live
            </Link>
            <Link
              to={`stream/edit/${stream.id}`}
              className="btn btn-neutral pl-6 pr-6"
            >
              Edit
            </Link>
          </div>
          <div className="card-actions justify-center">
            <Link to={`stream/delete/${stream.id}`} className="btn btn-warning">
              Delete
            </Link>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Link
          to={`stream/live/${stream.id}`}
          className="btn btn-primary btn-lg"
        >
          Watch
        </Link>
      );
    }
  }
  renderOtherStreams() {
    return this.props.streams.map((stream) => {
      if (stream.id && this.props.currentUser.userId !== stream.userid) {
        return (
          <div
            className="card bg-base-200 bg-info shadow-xl font-black mb-2"
            key={uuid()}
          >
            <div className="avatar flex-col p-8 pb-0">
              <div className="w-24 rounded-xl">
                <img src={stream.userpfp} />
              </div>
              <h2 className="text-base pt-2 font-black font-semibold">
                By {stream.username}
              </h2>
            </div>
            <div className="card-body">
              <h2 className="card-title">{stream.title}</h2>
              <p className="text-md font-light">{stream.description}</p>
              <div className="card-actions justify-end">
                {this.renderUser(stream)}
              </div>
            </div>
          </div>
        );
      }
    });
  }

  renderStreams = () => {
    return this.props.streams.map((stream) => {
      if (stream.id && this.props.currentUser.userId === stream.userid) {
        return (
          <div
            className="card w-96 bg-base-200 bg-info m-1 shadow-xl"
            key={uuid()}
          >
            <div className="card-body">
              <h2 className="card-title">{stream.title}</h2>
              <p className="text-md font-light">{stream.description}</p>
              <div className="card-actions justify-center">
                {this.renderUser(stream)}
              </div>
            </div>
          </div>
        );
      }
    });
  };
  render() {
    if (this.props.currentUser.isLoggedIn) {
      return (
        <div className="border border-base-300 bg-base-200">
          <Carousel
            allStreams={this.props.streams}
            currentUser={this.props.currentUser.userId}
          />
          <div className="hero-content flex-row gap-5 ml-auto mr-auto">
            <div className="hero-content flex-col justify-self-start mb-auto ">
              <h1 className=" text-5xl font-bold mr-auto mt-4 ">My Streams</h1>
              {this.renderStreams()}
            </div>
            <div className="hero-content flex-col justify-self-end mb-auto w-max mr-auto">
              <h1 className=" text-5xl font-bold mr-auto mt-4 ">
                Popular Streams
              </h1>
              {this.renderOtherStreams()}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="hero min-h-screen bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row-reverse gap-x-8">
            <div className="text-center lg:text-left">
              <h1 className=" text-5xl font-bold w-96 leading-snug ">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-accent relative inline-block">
                  <span className="relative text-white mr-4 ml-4">
                    Login Now!
                  </span>
                </span>
                To join your friends in the Cube
              </h1>
              <p className="py-6  text-lg">
                Create and Share Streams with your Friends and Family
              </p>
            </div>
            <div className="card h-64 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="w-12 rounded-full ring-offset-base-100 ring-offset-2">
                  <img src={glogo} alt="google logo" />
                </div>
                <p className="py-6 pt-0">
                  Logging in to our platform is as easy as clicking a Button
                  with Google.
                </p>
                <div className="form-control mt-0 pt-0">
                  <GoogleLogin
                    theme="light"
                    clientId={`1021073274418-81ienqfhbevgg6qf55krn9b177jnss3k.apps.googleusercontent.com`}
                    onSuccess={this.handleLogin}
                    onFailure={this.handleFailure}
                    cookiePolicy={"single_host_origin"}
                  ></GoogleLogin>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    streams: Object.values(state.streams),
    currentUser: state.auth,
  };
};
export default connect(mapStateToProps, { getStreams, logIn })(StreamList);
