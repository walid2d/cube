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
      <div className="hero min-h-screen bg-base-200">
        <StreamForm onSubmit={this.onSubmit} btnTxt="Create">
          <h1 className="font-black">Create a New Stream</h1>
        </StreamForm>
      </div>
    );
  }
}

export default connect(null, { addStream })(CreateStream);
