import React from "react";
import { Tabs } from "antd";
import Tables from "./Tables";
import { render } from "@testing-library/react";
import Sections from "./Sections";

class Front extends React.Component {
  render() {
    const { TabPane } = Tabs;
    return (
      <div className="ui container">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Todos" key="1">
            <Sections buttonName="Create Todos" />
            <Tables />
          </TabPane>
          <TabPane tab="Users" key="2">
            <Sections buttonName="Create Users" />
            <Tables />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Front;
