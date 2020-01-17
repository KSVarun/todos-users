import React from "react";
import { Button } from "antd";

import { Link } from "react-router-dom";

import { createUser, createTodos } from "../actions";

class Sections extends React.Component {
  render() {
    return (
      <div>
        <Link to="/userform" title={this.props.buttonName}>
          {this.props.buttonName}
        </Link>
      </div>
    );
  }
}

export default Sections;
