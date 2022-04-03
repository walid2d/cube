import React from "react";
import { Field, reduxForm } from "redux-form";
class CreateStream extends React.Component {
  renderInput = ({ input, label, type }) => {
    return (
      <div className="form-control">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          onChange={input.onChange}
          value={input.value}
          placeholder={type}
          className=" input input-primary input-bordered"
        />
      </div>
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
              name="text"
              label="Title"
              type="Type Your Title Here"
              component={this.renderInput}
            />
            <Field
              name="description"
              label="Description"
              type="Give Your Video A Description"
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
export default reduxForm({
  form: "CreateStream",
})(CreateStream);
