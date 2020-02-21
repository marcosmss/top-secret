import React from "react";
import { Menu, Layout } from "antd";
import "./header.css";
import { useNavigate } from 'react-router';

const { Header } = Layout;

// import { Container } from './styles';

export default function HeaderHome() {
  const navigate = useNavigate();
  return (
    <Header className="header">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      className="menu-header"
    >
      <Menu.Item key="1" onClick={() => navigate('/home')}>Home</Menu.Item>
      <Menu.Item key="2" onClick={() => navigate('/')}>Sair</Menu.Item>
    </Menu>
  </Header>  );
}
