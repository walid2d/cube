import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addStream } from "../../API/streams";

class CreateStream extends React.Component {
  //injects the form into the redux field component
  // Shows the error component
  renderInput = ({ input, label, type, meta }) => {
    const errorEle =
      meta.touched && meta.error ? (
        <span className="text-sm text-error">{meta.error}</span>
      ) : null;
    return (
      <>
        <div className="form-control">
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
          <input
            autoComplete="off"
            onChange={input.onChange}
            value={input.value}
            placeholder={type}
            className={`input ${
              errorEle ? "input-error" : "input-primary"
            } input-bordered`}
          />
        </div>
        {errorEle}
      </>
    );
  };
  onSubmit = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <form
            className="card-body"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              name="title"
              label="Title"
              type="Type your title here"
              component={this.renderInput}
            />
            <Field
              name="description"
              label="Description"
              type="Give your video a description"
              component={this.renderInput}
            />
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

//checks if the form is empty or not
const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "Title cannot be empty";
  }
  if (!formValues.description) {
    error.description = "Decription cannot be empty";
  }
  return error;
};
export default reduxForm({
  form: "CreateStream",
  validate: validate,
})(CreateStream);
