import React from "react";
import { Table, Divider } from "antd";

class Tables extends React.Component {
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
            <a>Edit</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        )
      }
    ];
    return columns;
  }

  renderDataHelper() {
    const data = [
      {
        key: "1",
        name: "John Brown"
      },
      {
        key: "2",
        name: "Jim Green"
      },
      {
        key: "3",
        name: "Joe Black"
      }
    ];
    return data;
  }

  render() {
    return (
      <div>
        <Table
          columns={this.renderColumnHelper()}
          dataSource={this.renderDataHelper()}
          style={{ marginTop: "10px" }}
        />
      </div>
    );
  }
}

export default Tables;
