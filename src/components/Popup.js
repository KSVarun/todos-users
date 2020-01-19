import React from "react";
import { Modal, Button } from "antd";

import history from "./history";

class Popup extends React.Component {
  state = { visible: false };

  componentDidMount() {
    const visibality = this.props.visibality;
    this.setState({ visible: visibality });
  }

  handleOk = e => {
    this.setState({
      visible: false
    });
    history.pushState("/");
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
export default Popup;
