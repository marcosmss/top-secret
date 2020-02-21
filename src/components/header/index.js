import React from "react";
import { Menu, Layout } from "antd";
import "./header.css";
import { useNavigate } from 'react-router';
import Logo from '../../assets/img/logo_superbid.png'
const { Header } = Layout;

// import { Container } from './styles';

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
        <Menu.Item key="1" onClick={() => navigate('/home')}>Home</Menu.Item>
        <Menu.Item key="2" onClick={() => navigate('/home')}>Lista de Projetos</Menu.Item>
        <Menu.Item key="9" className="exit-menu"  onClick={() => navigate('/')}>Sair</Menu.Item>
    </Menu>
  </Header>  );
}
