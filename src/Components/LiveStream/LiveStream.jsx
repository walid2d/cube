import React from "react";
import FlvJs from "flv.js";
import { connect } from "react-redux";
import { getOneStream } from "../../Actions/Index";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
      const url = this.props.match.params.id;
      return (
        <div className="mb-auto">
          <div className="ml-4 mr-4 border-solid border-4 border-info ">
            <video
              ref={this.streamRef}
              style={{ width: "100%", height: "50rem" }}
              controls
            />
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-5xl my-4 ml-4">{this.props.stream.title}</h1>
              <h2 className="text-xl mb-96 ml-4 font-light">
                {this.props.stream.description}
              </h2>
            </div>
            <div className="flex self-start ">
              <CopyToClipboard text={url}>
                <button className="btn btn-info btn-wide mt-4 mr-4 ml-auto">
                  Copy Link
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { getOneStream })(LiveStream);
