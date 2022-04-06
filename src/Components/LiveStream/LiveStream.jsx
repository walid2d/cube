import React from "react";
import FlvJs from "flv.js";
import { connect } from "react-redux";
import { getOneStream } from "../../Actions/Index";

class LiveStream extends React.Component {
  constructor(props) {
    super(props);

    this.streamRef = React.createRef();
  }
  componentDidMount() {
    this.props.getOneStream(this.props.match.params.id);
    this.renderPlayer();
  }
  componentDidUpdate() {
    this.renderPlayer();
  }
  renderPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = FlvJs.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });
    this.player.attachMediaElement(this.streamRef.current);
    this.player.load();
    this.player.play();
  }
  render() {
    if (!this.props.stream) {
      return <h1>Loading....</h1>;
    } else {
      return (
        <div className="mb-auto">
          <video ref={this.streamRef} style={{ width: "100%" }} controls />
          <h1 className="text-5xl my-4 ml-4">{this.props.stream.title}</h1>
          <h2 className="text-xl mb-96 ml-4">
            {this.props.stream.description}
          </h2>
        </div>
      );
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { getOneStream })(LiveStream);
