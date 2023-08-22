import React from "react";
import Logo from "../../assets/logo.png";
import { Layout, Menu, theme, Col, Row, Button, Typography } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const HeaderComponent = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingInline: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            width: "30%",
            justifyContent: "space-between",
          }}
        >
          <img src={Logo} alt="logo" height="100%" />
          <h2 style={{ color: "#fff", fontWeight: "normal" }}>Announcements</h2>
        </div>
        <Button type="primary">Log in</Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
