import React, { useState } from "react";
import { Button, Form, Input, Row, Col, Space } from "antd";

const LoginComponent = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

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

  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{ height: "calc(100vh - 64px)" }}
    >
      <Col span={"8"}>
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
                <Input placeholder="Enter your email address" />
              </Form.Item>
              <Form.Item label="Password">
                <Input placeholder="Enter your password" />
              </Form.Item>
              <Form.Item {...buttonItemLayout}>
                <Row gutter={[8]} justify={"end"}>
                  <Col span={"3.8"}>
                    <Button type="primary">Log in</Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginComponent;
