import React from "react";
import { Input, Form, Button } from "antd";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import * as yup from "yup";

import { createUser, updateUser } from "../../actions/usersActions";

import { Modal } from "antd";
import { closeUserModal } from "../../actions/userModalActions";

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

class UserFormModal extends React.Component {
  handleSubmit = async (values, { resetForm }) => {
    let request;
    if (this.props.userForm.type === "add") {
      request = this.props.createUser(values);
    } else {
      request = this.props.updateUser(values);
    }
    await request;
    resetForm();
  };

  render() {
    return (
      <Formik
        enableReinitialize={true}
        validateOnChange={true}
        initialValues={this.props.userDetails}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({ values, handleSubmit, errors, touched }) => (
          <Form>
            <Modal
              title={this.props.userForm.title}
              visible={this.props.userForm.open}
              onOk={handleSubmit}
              onCancel={this.props.closeUserModal}
              footer={[
                <Button
                  disabled={this.props.users.cancel}
                  key="cancle"
                  onClick={this.props.closeUserModal}
                >
                  Return
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  loading={this.props.users.loading}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              ]}
            >
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
                help={touched.email && errors.email ? errors.email : ""}
                validateStatus={
                  touched.email && errors.email ? "error" : undefined
                }
              >
                <label>Email</label>
                <Field name="email" type="text" as={Input}></Field>
              </FormItem>
              <pre>{JSON.stringify()}</pre>
            </Modal>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  let userDetails = { name: "", email: "", key: "" };
  if (state.userForm.open && state.userForm.type === "edit") {
    userDetails = state.users.users.find(
      user => user.key === state.userForm.key
    );
  }
  return { userForm: state.userForm, userDetails, users: state.users };
};

export default connect(mapStateToProps, {
  createUser,
  closeUserModal,
  updateUser
})(UserFormModal);
