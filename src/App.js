import React from "react";
import "./App.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Col, Row, Button, Typography } from "antd";
import HeaderComponent from "./components/Header/HeaderComponent";
import LoginComponent from "./components/Login/LoginComponent";
const { Header, Content, Footer, Sider } = Layout;

const { Title } = Typography;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <HeaderComponent />
      <LoginComponent />
      {/* <Content
        className="site-layout"
        style={{
          padding: "0 50px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content> */}
    </Layout>
  );
};
export default App;
