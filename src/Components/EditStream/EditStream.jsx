import React from "react";
import { connect } from "react-redux";
import { getOneStream, editStream } from "../../Actions/Index";
import StreamForm from "../StreamForm/StreamForm";

class EditStream extends React.Component {
  componentDidMount() {
    this.props.getOneStream(this.props.match.params.id);
  }
  onSubmit = (values) => {
    this.props.editStream(this.props.match.params.id, values);
  };
  render() {
    if (this.props.stream) {
      const { title, description } = this.props.stream;
      return (
        <div>
          <h1>Edit form</h1>
          <StreamForm
            initialValues={{ title, description }}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { getOneStream, editStream })(
  EditStream
);
