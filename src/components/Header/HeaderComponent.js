import React from "react";
import Logo from "../../assets/logo.png";
import { Layout, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
const { Header } = Layout;

const HeaderComponent = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

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
        boxShadow: "0px 2px #0000001a",
        background: "#fff",
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
        {userInfo?.userInfo ? (
          <Button type="primary" onClick={logoutHandler}>
            Logout
          </Button>
        ) : location?.pathname.split("/")?.[1] === "login" ? (
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            View Announcements
          </Button>
        ) : (
          <Button
            type="primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </Button>
        )}
      </div>
    </Header>
  );
};

export default HeaderComponent;
