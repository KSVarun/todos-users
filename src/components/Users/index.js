import React from "react";
import { Table, Divider, Button } from "antd";
import { connect } from "react-redux";

import { deleteUser } from "../../actions/usersActions";
import UserFormModal from "./UserFormModal";
import { openUserModal } from "../../actions/userModalActions";

class UserTables extends React.Component {
  componentDidUpdate() {
    localStorage.setItem("users", JSON.stringify(this.props.users.users));
  }
  handleDelete(key) {
    this.props.deleteUser(key);
  }
  renderColumnHelper() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <Button
              onClick={() => this.props.openUserModal("edit", record.key)}
            >
              Edit
            </Button>
            <Divider type="vertical" />
            <Button onClick={() => this.props.deleteUser(record.key)}>
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

  renderTableHelper() {
    if (this.props.users.searching) {
      return (
        <Table
          columns={this.renderColumnHelper()}
          dataSource={this.renderDataHelper(this.props.users.searchedResult)}
          style={{ marginTop: "10px" }}
          pagination={{ pageSize: 5 }}
        />
      );
    } else {
      return (
        <Table
          columns={this.renderColumnHelper()}
          dataSource={this.renderDataHelper(this.props.users.users)}
          style={{ marginTop: "10px" }}
          pagination={{ pageSize: 5 }}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderTableHelper()}
        <UserFormModal />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps, {
  deleteUser,
  openUserModal
})(UserTables);
