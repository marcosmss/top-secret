import React from "react";
import { Menu, Layout } from "antd";
import "./Header.css";

const { Header } = Layout;
class HeaderHome extends React.Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          className="menu-header"
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Sair</Menu.Item>
        </Menu>
      </Header>
    );
  }
}
export default HeaderHome;
