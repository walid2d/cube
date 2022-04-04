import React from "react";
import { connect } from "react-redux";
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
        <>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Edit</button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Delete</button>
          </div>
        </>
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
              <button className="btn btn-primary">Watch Now</button>
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
