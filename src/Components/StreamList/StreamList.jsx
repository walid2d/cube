import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStreams } from "../../Actions/Index";
import uuid from "react-uuid";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderUser(stream) {
    if (
      stream.userid === this.props.currentUser.userId &&
      this.props.currentUser.isLoggedIn
    ) {
      return (
        <Fragment key={uuid()}>
          <div className="card-actions justify-center">
            <Link to={`stream/edit/${stream.id}`} className="btn btn-primary">
              Edit
            </Link>
          </div>
          <div className="card-actions justify-center">
            <Link
              to={`stream/delete/${stream.id}`}
              className="btn btn-secondary"
            >
              Delete
            </Link>
          </div>
        </Fragment>
      );
    }
  }

  renderStreams = () => {
    return this.props.streams.map((stream) => {
      if (stream.id) {
        return (
          <div
            className="card w-64 h-80 bg-base-100 shadow-xl image-full "
            key={uuid()}
          >
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{stream.title}</h2>
              <p>{stream.description}</p>
              <div className="card-actions justify-center">
                <Link
                  to={`stream/live/${stream.id}`}
                  className="btn btn-primary"
                >
                  Watch Now
                </Link>
              </div>
              {this.renderUser(stream)}
            </div>
          </div>
        );
      }
    });
  };
  render() {
    return <>{this.renderStreams()}</>;
  }
}
const mapStateToProps = (state) => {
  const obj = {
    test: Object.values(state.streams),
  };
  console.log(obj.test);
  return {
    streams: Object.values(state.streams),
    currentUser: state.auth,
  };
};
export default connect(mapStateToProps, { getStreams })(StreamList);
