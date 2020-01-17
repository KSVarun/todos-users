import React from "react";
import { Modal, Input } from "antd";
import { Formik, Field, Form } from "formik";

class Popup extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <Modal
        title={this.props.title}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Formik
          initialValues={{ NAME: "", EMAIL: "" }}
          onSubmit={data => {
            console.log(data);
          }}
        >
          {({ values }) => (
            <Form>
              <Field name="NAME" type="text" as={Input}></Field>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}

export default Popup;
