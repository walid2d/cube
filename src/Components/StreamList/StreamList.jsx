import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStreams } from "../../Actions/Index";
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
        <Fragment key={stream.id}>
          <div className="card-actions justify-center">
            <Link to={`stream/edit/${stream.id}`} className="btn btn-primary">
              Edit
            </Link>
          </div>
          <div className="card-actions justify-center">
            <Link to={`stream/delete/${stream.id}`} className="btn btn-primary">
              Delete
            </Link>
          </div>
        </Fragment>
      );
    }
  }

  renderStreams = () => {
    console.log(this.props);
    return this.props.streams.map((stream) => {
      return (
        <div
          className="card w-64 h-80 bg-base-100 shadow-xl image-full "
          key={stream.id}
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
              <Link to={`stream/live/${stream.id}`} className="btn btn-primary">
                Watch Now
              </Link>
            </div>
            {this.renderUser(stream)}
          </div>
        </div>
      );
    });
  };
  render() {
    console.log(this.props.streams);
    return <>{this.renderStreams()}</>;
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUser: state.auth,
  };
};
export default connect(mapStateToProps, { getStreams })(StreamList);
