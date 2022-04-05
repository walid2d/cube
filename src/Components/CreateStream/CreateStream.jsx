import React from "react";
import { connect } from "react-redux";
import { addStream } from "../../Actions/Index";
import StreamForm from "../StreamForm/StreamForm";

class CreateStream extends React.Component {
  onSubmit = (values) => {
    this.props.addStream(values);
  };
  render() {
    return (
      <>
        <h1>Create a Stream</h1>
        <StreamForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default connect(null, { addStream })(CreateStream);
