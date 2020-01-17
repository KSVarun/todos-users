import React from "react";
import { Modal, Input, Button } from "antd";
import { Formik, Field, Form } from "formik";
import { connect } from "react-redux";

import { createUser } from "../actions";
import history from "./history";

class Popup extends React.Component {
  render = () => {
    return (
      <div>
        <Formik
          initialValues={{ name: "varun", email: "varun@gmail.com" }}
          onSubmit={data => {
            this.props.createUser(data.name, data.email);
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
                <Button type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  };
}

export default connect(null, { createUser })(Popup);
