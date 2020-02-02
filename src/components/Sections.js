import React from "react";
import { Button, Input } from "antd";
import { connect } from "react-redux";

import { openUserModal } from "../actions/userModalActions";
import { openTodoModal } from "../actions/todosModalActions";
import { searchTodo } from "../actions/todosActions";
import { searchUser } from "../actions/usersActions";

const { Search } = Input;
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
      <div className="nav">
        <div>
          <Button
            onClick={() => {
              this.handleClick(this.props);
            }}
          >
            {this.props.buttonName}
          </Button>
        </div>
        <div className="search">
          <Search
            placeholder="Search by name"
            // onSearch={value => this.props.searchTodo(value)}
            enterButton
            onChange={e => {
              if (this.props.tab === "todos") {
                this.props.searchTodo(e.target.value);
              } else if (this.props.tab === "users") {
                this.props.searchUser(e.target.value);
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, {
  openUserModal,
  openTodoModal,
  searchTodo,
  searchUser
})(Sections);
