import React from "react";
import { Table, Divider, Button } from "antd";
import { connect } from "react-redux";

import { deleteTodo } from "../../actions/todosActions";
import { openTodoModal } from "../../actions/todosModalActions";
import TodoFormModal from "./TodoFormModal";

class TodoTables extends React.Component {
  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.props.todos.todos));
  }
  handleDelete(key) {
    this.props.deleteTodo(key);
  }
  renderColumnHelper() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Created",
        dataIndex: "created",
        key: "created"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <Button
              onClick={() => this.props.openTodoModal("edit", record.key)}
            >
              Edit
            </Button>
            <Divider type="vertical" />
            <Button onClick={() => this.props.deleteTodo(record.key)}>
              Delete
            </Button>
          </span>
        )
      }
    ];
    return columns;
  }

  renderDataHelper(tableData) {
    const data = tableData;
    return data;
  }

  render() {
    return (
      <div>
        <Table
          columns={this.renderColumnHelper()}
          dataSource={this.renderDataHelper(this.props.todos.todos)}
          style={{ marginTop: "10px" }}
          pagination={{ pageSize: 5 }}
        />
        <TodoFormModal />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, {
  deleteTodo,
  openTodoModal
})(TodoTables);
