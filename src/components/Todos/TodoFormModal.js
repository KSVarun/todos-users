import React from "react";
import { Input, Form, Modal, Button } from "antd";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import * as yup from "yup";

import { createTodo, updateTodo } from "../../actions/todosActions";

import { closeTodoModal } from "../../actions/todosModalActions";

const FormItem = Form.Item;

const validationSchema = yup.object({
  name: yup
    .string()
    .required("This field is required")
    .max(20)
});

class TodoFormModal extends React.Component {
  handleSubmit = async (values, { resetForm }) => {
    let request;
    if (this.props.todoForm.type === "add") {
      request = this.props.createTodo(values);
    } else {
      request = this.props.updateTodo(values);
    }
    await request;
    resetForm();
  };

  render() {
    return (
      <Formik
        enableReinitialize
        initialValues={this.props.todoDetails}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form>
            <Modal
              title={this.props.todoForm.title}
              visible={this.props.todoForm.open}
              onOk={handleSubmit}
              onCancel={this.props.closeTodoModal}
              footer={[
                <Button
                  disabled={this.props.todos.cancel}
                  key="cancle"
                  onClick={this.props.closeTodoModal}
                >
                  Return
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  loading={this.props.todos.loading}
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
                <Field autoFocus name="name" type="text" as={Input}></Field>
              </FormItem>
              {this.props.todoForm.type === "edit" && (
                <FormItem>
                  <label>Date</label>
                  <div>{this.props.todoDetails.created}</div>
                </FormItem>
              )}
            </Modal>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  let todoDetails = { name: "", created: "" };
  if (state.todoForm.open && state.todoForm.type === "edit") {
    const todo = state.todos.todos.find(
      todo => todo.key === state.todoForm.key
    );
    if (todo) {
      todoDetails.name = todo.name;
      todoDetails.created = todo.created;
    }
  }

  return { todoForm: state.todoForm, todoDetails, todos: state.todos };
};

export default connect(mapStateToProps, {
  createTodo,
  closeTodoModal,
  updateTodo
})(TodoFormModal);
