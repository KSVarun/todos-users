import React from "react";
import { Input, Form, Modal } from "antd";
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
  handleSubmit = (values, resetForm) => {
    console.log(values);
    if (this.props.todoForm.type === "add") {
      this.props.createTodo(values);
    } else {
      this.props.updateTodo(values);
    }
    this.props.closeTodoModal();
    resetForm();
  };

  render() {
    return (
      <Formik
        enableReinitialize={true}
        validateOnChange={true}
        initialValues={this.props.todoDetails}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) =>
          this.handleSubmit(values, resetForm)
        }
      >
        {({ values, handleSubmit, errors, touched }) => (
          <Form>
            <Modal
              title={this.props.todoForm.title}
              visible={this.props.todoForm.open}
              onOk={handleSubmit}
              onCancel={() => this.props.closeTodoModal()}
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
              {this.props.todoForm.type === "edit" && (
                <FormItem>
                  <label>Date</label>
                  <div>{this.props.todoDetails.created}</div>
                </FormItem>
              )}
              <pre>{JSON.stringify()}</pre>
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
    todoDetails = state.todos.todos.find(
      todo => todo.key === state.todoForm.key
    );
  }
  return { todoForm: state.todoForm, todoDetails };
};

export default connect(mapStateToProps, {
  createTodo,
  closeTodoModal,
  updateTodo
})(TodoFormModal);
