import React from "react";
import { Breadcrumb, Layout } from "antd";
const { Content } = Layout;

class StoreInfo extends React.Component {
  render() {
    return (
      <Layout>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Tipo</Breadcrumb.Item>
          <Breadcrumb.Item>Loja</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    );
  }
}

export default StoreInfo;
