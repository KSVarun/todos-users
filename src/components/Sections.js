import React from "react";
import { Button } from "antd";
import history from "./history";
import { connect } from "react-redux";
import { todosActive, usersActive } from "../actions";

class Sections extends React.Component {
  componentDidMount() {
    if (this.props.buttonName === "Create Todos") {
      this.props.todosActive();
    } else {
      this.props.usersActive();
    }
  }
  render() {
    const goto = this.props.goto;
    return (
      <div>
        <Button
          onClick={() => history.push(goto)}
          title={this.props.buttonName}
        >
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}

export default connect(null, { todosActive, usersActive })(Sections);
