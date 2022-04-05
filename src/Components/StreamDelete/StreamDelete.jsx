import React from "react";
import { connect } from "react-redux";
import { deleteStream } from "../../Actions/Index";
import routerHistory from "../../Util/routerHistory";

class StreamDelete extends React.Component {
  onCancel = () => {
    const history = routerHistory;
    history.push("/");
  };
  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
    const history = routerHistory;
    history.push("/");
  };
  render() {
    return (
      <div className="hero min-h-screen">
        <div className=" card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              Are you sure you want to delete the Stream ?
            </h2>

            <div className="card-actions justify-end">
              <button className="btn btn-warning" onClick={this.onDelete}>
                Delete
              </button>
              <button onClick={this.onCancel} className="btn btn-ghost">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteStream })(StreamDelete);
