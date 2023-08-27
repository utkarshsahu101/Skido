import React, { useEffect, useState } from "react";
import { Button, Form, Input, Row, Col, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, userInfo, error } = userLogin;

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  useEffect(() => {
    // if user found then navigate to list page
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  const resetHandler = () => {
    setEmail("");
    setPassword("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // dispatch login action
    dispatch(login(email, password));
    resetHandler();
  };

  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{ height: "calc(100vh - 64px)" }}
    >
      <Col xl={8} md={12}>
        <Row gutter={[8]}>
          <Col span={"24"}>
            <h1>Log in</h1>
          </Col>
          <Col span={"24"}>
            <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{
                layout: formLayout,
              }}
              onValuesChange={onFormLayoutChange}
              style={{
                maxWidth: formLayout === "inline" ? "none" : 600,
              }}
            >
              <Form.Item label="Email">
                <Input
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </Form.Item>
              <Form.Item label="Password">
                <Input
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </Form.Item>
              <Form.Item {...buttonItemLayout}>
                <Row gutter={[8]} justify={"end"}>
                  <Col span={"3.8"}>
                    <Button
                      type="primary"
                      onClick={submitHandler}
                      loading={loading}
                    >
                      Log in
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
            {error && <Alert message={error} type="error" />}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginComponent;
