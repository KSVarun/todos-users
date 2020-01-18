import React from "react";
import { Modal, Input, Button, Form } from "antd";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import * as yup from "yup";

import { createUser, fetchUser } from "../actions";
import history from "./history";

const FormItem = Form.Item;

const validationSchema = yup.object({
  name: yup
    .string()
    .required("This field is required")
    .max(20),
  email: yup
    .string()
    .email("Provide an valid email")
    .required("This field is required")
});
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
        <h2>Add User</h2>
        <Formik
          validateOnChange={true}
          initialValues={{ name: nameValue, email: emailValue }}
          validationSchema={validationSchema}
          onSubmit={data => {
            this.props.createUser(data.email, data.name);
            history.push("/");
          }}
        >
          {({ values, handleSubmit, errors, touched }) => (
            <form>
              <FormItem
                help={touched.name && errors.name ? errors.name : ""}
                validateStatus={
                  touched.name && errors.name ? "error" : undefined
                }
              >
                <label>Name</label>
                <Field name="name" type="text" as={Input}></Field>
              </FormItem>
              <FormItem
                help={touched.name && errors.name ? errors.name : ""}
                validateStatus={
                  touched.name && errors.name ? "error" : undefined
                }
              >
                <label>Email</label>
                <Field name="email" type="text" as={Input}></Field>
              </FormItem>
              <div style={{ marginTop: "10px" }}>
                <Button type="primary" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button type="danger" onClick={this.handleCancle}>
                  Cancel
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
