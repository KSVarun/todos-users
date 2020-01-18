import React from "react";
import { Table, Divider } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchUsers } from "../actions";

class Tables extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
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
            <Link to={`/editUser/${record.key}`}>Edit</Link>
            <Divider type="vertical" />
            <Link to="">Delete</Link>
          </span>
        )
      }
    ];
    return columns;
  }

  renderDataHelper(tableData) {
    //debugger;
    const data = tableData;
    return data;
  }

  render() {
    return (
      <div>
        <Table
          columns={this.renderColumnHelper()}
          dataSource={this.renderDataHelper(this.props.users.tableData)}
          style={{ marginTop: "10px" }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { fetchUsers })(Tables);
