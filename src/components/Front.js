import React from "react";
import { Tabs } from "antd";
import Sections from "./Sections";
import UserTable from "./UserTable";
import TodoTable from "./TodoTable";

class Front extends React.Component {
  render() {
    const { TabPane } = Tabs;
    return (
      <div className="ui container">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Todos" key="1">
            <Sections buttonName="Create Todos" goto="/addTodo" />
            <TodoTable />
          </TabPane>
          <TabPane tab="Users" key="2">
            <Sections buttonName="Create Users" goto="/addUser" />
            <UserTable />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Front;
