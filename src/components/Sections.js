import React from "react";
import { Button } from "antd";
import history from "./history";
import { connect } from "react-redux";
import { todosActive, usersActive } from "../actions";

class Sections extends React.Component {
  handleClick(data) {
    if (data.buttonName === "Create Todos") {
      this.props.todosActive();
    } else if (data.buttonName === "Create Users") {
      this.props.usersActive();
    }
    history.push(data.goto);
  }
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.handleClick(this.props);
          }}
          title={this.props.buttonName}
        >
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}

export default connect(null, { todosActive, usersActive })(Sections);
