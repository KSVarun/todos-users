import React from "react";
import { Modal, Input, Button } from "antd";
import { Formik, Field } from "formik";
import { connect } from "react-redux";

import { createUser, fetchUser } from "../actions";
import history from "./history";

class AddUser extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.key);
  }
  handleCancle() {
    history.push("/");
  }
  render = () => {
    var nameValue = "";
    var emailValue = "";
    if (!this.props.toEdit) {
      nameValue = "";
      emailValue = "";
    } else {
      nameValue = this.props.toEdit.name;
      emailValue = this.props.toEdit.key;
    }
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h2>Add Todo</h2>
        <Formik
          initialValues={{ name: nameValue, email: emailValue }}
          onSubmit={data => {
            this.props.createUser(data.email, data.name);
            history.push("/");
          }}
        >
          {({ values, handleSubmit }) => (
            <form>
              <div>
                <label>Name</label>
                <Field name="name" type="text" as={Input}></Field>
              </div>
              <div>
                <label>Email</label>
                <Field name="email" type="text" as={Input}></Field>
              </div>
              <div style={{ marginTop: "10px" }}>
                <Button type="primary" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button type="danger" onClick={this.handleCancle}>
                  Cancle
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  };
}
const mapStateToProps = (state, ownProps) => {
  return { toEdit: state.users.users[ownProps.match.params.key] };
};

export default connect(mapStateToProps, { createUser, fetchUser })(AddUser);
