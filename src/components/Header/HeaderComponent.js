import React from "react";
import Logo from "../../assets/logo.png";
import { Layout, Button } from "antd";
import "./Header.css";
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
    <Header className="headerWrapper">
      <div className="headerWrapperContainer">
        <div className="imageWrapper">
          <img src={Logo} alt="logo" height="100%" />
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
            Announcements
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
