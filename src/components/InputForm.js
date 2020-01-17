import React from "react";
import { Formik, Field, Form } from "formik";
import { Button, Input } from "antd";

class InputForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={data => {
          console.log(data);
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field name="name" type="text" as={Input}></Field>
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="text" as={Input}></Field>
            </div>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default InputForm;
