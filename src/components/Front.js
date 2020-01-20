import React from "react";
import { Tabs } from "antd";
import { connect } from "react-redux";
import Sections from "./Sections";
import UserTable from "./UserTable";
import TodoTable from "./TodoTable";

class Front extends React.Component {
  render() {
    const { TabPane } = Tabs;
    return (
      <div className="ui container">
        <Tabs defaultActiveKey={this.props.tab}>
          <TabPane tab="Todos" key="todos">
            <Sections buttonName="Create Todos" goto="/addTodo" />
            <TodoTable />
          </TabPane>
          <TabPane tab="Users" key="users">
            <Sections buttonName="Create Users" goto="/addUser" />
            <UserTable />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { active } = state;
  return active;
};

export default connect(mapStateToProps)(Front);
