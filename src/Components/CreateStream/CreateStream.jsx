import React from "react";
import { Field, reduxForm } from "redux-form";
class CreateStream extends React.Component {
  renderInput = (label, type) => {
    return (
      <div className="form-control">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          type="text"
          placeholder={type}
          className=" input input-primary input-bordered"
        />
      </div>
    );
  };
  render() {
    console.log(this.props);
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <Field
              name="text"
              component={() => this.renderInput("Tittle", "Tittle")}
            />
            <Field
              name="description"
              component={() => this.renderInput("Description", "Description")}
            />
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default reduxForm({
  form: "CreateStream",
})(CreateStream);
