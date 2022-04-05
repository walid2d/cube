import React from "react";
import { connect } from "react-redux";

class EditStream extends React.Component {
  render() {
    console.log(this.props.stream);
    return <h1>component2</h1>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps)(EditStream);
