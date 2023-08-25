import React from "react";
import "./App.css";
import { Layout } from "antd";
import HeaderComponent from "./components/Header/HeaderComponent";
import LoginComponent from "./components/Login/LoginComponent";
import AnnouncementsComponent from "./components/Announcements/AnnouncementsComponent";
import { Route, Routes } from "react-router-dom";
import CreateAnnouncement from "./components/CreateAnnouncement/CreateAnnouncement";
const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Content
        style={{
          padding: "0 50px",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Routes>
          <Route path="/" element={<AnnouncementsComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/create" element={<CreateAnnouncement />} />
        </Routes>
      </Content>
    </Layout>
  );
};
export default App;
