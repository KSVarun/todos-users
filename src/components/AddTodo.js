import React from "react";
import { Input, Button, Form } from "antd";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import moment from "moment";
import * as yup from "yup";

import { createTodo, fetchTodo } from "../actions";
import history from "./history";
import Popup from "./Popup";

const FormItem = Form.Item;

const validationSchema = yup.object({
  name: yup
    .string()
    .required("This field is required")
    .max(20)
});
class AddTodo extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.key);
  }
  handleCancle() {
    history.push("/");
  }

  render = () => {
    const date = moment().format("Do MMM YYYY HH:mm:ss");
    var nameValue = "";
    var dateValue = "";
    if (!this.props.toEdit) {
      nameValue = "";
      dateValue = date;
    } else {
      nameValue = this.props.toEdit.name;
      dateValue = this.props.toEdit.key;
    }

    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h2>Add Todo</h2>
        <Formik
          validateOnChange={true}
          initialValues={{ name: nameValue, created: dateValue }}
          validationSchema={validationSchema}
          onSubmit={data => {
            this.props.createTodo(data.created, data.name);
            history.push("/");
          }}
        >
          {({ values, errors, handleSubmit, touched }) => (
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

              <FormItem>
                <label>Created</label>
                <Field name="created" type="text" as={Input}></Field>
              </FormItem>
              <div style={{ marginTop: "10px" }}>
                <Button type="primary" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button
                  type="danger"
                  onClick={this.handleCancle}
                  style={{ marginLeft: "5px" }}
                >
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
  return { toEdit: state.todos.todos[ownProps.match.params.key] };
};

export default connect(mapStateToProps, { createTodo, fetchTodo })(AddTodo);
