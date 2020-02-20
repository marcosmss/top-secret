import React from "react";
import { Menu, Icon, Layout, Row, Col } from "antd";
import StoreInfo from "../StoreInfo/StoreInfo";

const { SubMenu } = Menu;
const { Sider } = Layout;

class StoreMenu extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 5 }}
            lg={{ span: 2 }}
            xl={{ span: 1 }}
          >
            <Sider style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      Lojas Corporativo
                    </span>
                  }
                >
                  <Menu.Item key="1">Outlet PDG</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="audit" />
                      Lojas Judicial
                    </span>
                  }
                >
                  <Menu.Item key="2">Dedalo</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 15, offset: 2 }}
            lg={{ span: 18, offset: 3 }}
            xl={{ span: 18, offset: 3 }}
          >
            <StoreInfo />
          </Col>
        </Row>
      </div>
    );
  }
}

export default StoreMenu;
