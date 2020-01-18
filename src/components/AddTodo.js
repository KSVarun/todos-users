import React from "react";
import { Modal, Input, Button } from "antd";
import { Formik, Field } from "formik";
import { connect } from "react-redux";
import moment from "moment";

import { createTodo, fetchTodo } from "../actions";
import history from "./history";

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
          initialValues={{ name: nameValue, created: dateValue }}
          onSubmit={data => {
            this.props.createTodo(data.created, data.name);
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
                <label>Created</label>
                <Field name="created" type="text" as={Input}></Field>
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
  return { toEdit: state.todos.todos[ownProps.match.params.key] };
};

export default connect(mapStateToProps, { createTodo, fetchTodo })(AddTodo);
