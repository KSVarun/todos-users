import React from "react";
import { Button } from "antd";
import history from "./history";

class Sections extends React.Component {
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

export default Sections;
