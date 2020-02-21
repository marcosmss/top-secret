import React from "react";
import { Menu, Layout } from "antd";
import "./header.css";
import { useNavigate } from 'react-router';
const { Header } = Layout;

export default function HeaderHome() {
  const navigate = useNavigate();
  return (
    <Header className="header">       
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="menu-header"
      >        
        <Menu.Item key="1" onClick={() => navigate('/admin/home')}>Home</Menu.Item>
        <Menu.Item key="2" onClick={() => navigate('/admin/projects')}>Lista de Projetos</Menu.Item>
        <Menu.Item key="9" className="exit-menu"  onClick={() => navigate('/')}>Sair</Menu.Item>
    </Menu>
  </Header>  );
}
