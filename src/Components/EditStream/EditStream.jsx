import React from "react";
import { connect } from "react-redux";
import { getOneStream } from "../../Actions/Index";

class EditStream extends React.Component {
  componentDidMount() {
    this.props.getOneStream(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    if (this.props.stream) {
      return <div>{this.props.stream.title}</div>;
    } else {
      return <h1>component2</h1>;
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { getOneStream })(EditStream);
