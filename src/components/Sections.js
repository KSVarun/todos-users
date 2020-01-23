import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";

import { openUserModal } from "../actions/userModalActions";
import { openTodoModal } from "../actions/todosModalActions";

class Sections extends React.Component {
  handleClick = data => {
    if (data.buttonName === "Create Todos") {
      this.props.openTodoModal("add");
    } else if (data.buttonName === "Create Users") {
      this.props.openUserModal("add");
    }
  };
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.handleClick(this.props);
          }}
        >
          {this.props.buttonName}
        </Button>
      </div>
    );
  }
}

export default connect(null, { openUserModal, openTodoModal })(Sections);
