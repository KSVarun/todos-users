import React from "react";
import { Tabs } from "antd";
import { connect } from "react-redux";
import Sections from "./Sections";
import UserTable from "./Users";
import TodoTable from "./Todos";

class Front extends React.Component {
  render() {
    const { TabPane } = Tabs;
    return (
      <div className="ui container">
        <Tabs>
          <TabPane tab="Users" key="users">
            <Sections buttonName="Create Users" />
            <UserTable />
          </TabPane>
          <TabPane tab="Todos" key="todos">
            <Sections buttonName="Create Todos" />
            <TodoTable />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default connect(null)(Front);
