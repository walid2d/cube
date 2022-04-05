import React from "react";
import { connect } from "react-redux";

class EditStream extends React.Component {
  render() {
    return <h1>component2</h1>;
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.auth,
  };
};
export default connect(mapStateToProps)(EditStream);
