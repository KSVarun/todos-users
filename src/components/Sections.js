import React from "react";
import { Button } from "antd";

import { createUser, createTodos } from "../actions";

class Sections extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={this.handleModal}>{this.props.buttonName}</Button>
      </div>
    );
  }
}

export default Sections;
