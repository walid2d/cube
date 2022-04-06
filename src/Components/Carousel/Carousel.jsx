import React from "react";
import uuid from "react-uuid";

class Carousel extends React.Component {
  renderRecentStreams = () => {
    const filterStreams = this.props.allStreams.filter(
      (stream) => stream.userid !== this.props.currentUser
    );
    return filterStreams.map((data) => {
      if (data.userpfp) {
        return (
          <div className="avatar" key={uuid()}>
            <div className="w-24 rounded">
              <img src={data.userpfp} />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <>
        <div className="alert alert-success shadow-lg rounded-none py-px pl-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Recently Active Users!</span>
          </div>
        </div>
        <div className="carousel carousel-center w-full p-4 space-x-4 bg-base-300">
          {this.renderRecentStreams()}
        </div>
      </>
    );
  }
}
export default Carousel;
