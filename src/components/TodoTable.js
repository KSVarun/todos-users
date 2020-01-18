import React from "react";
import { Table, Divider } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTodos } from "../actions";

class Tables extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
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
        dataIndex: "key",
        key: "key"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <Link to={`/editTodo/${record.key}`}>Edit</Link>
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
          dataSource={this.renderDataHelper(this.props.todos.tableData)}
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

export default connect(mapStateToProps, { fetchTodos })(Tables);
