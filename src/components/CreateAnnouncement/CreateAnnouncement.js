import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAnnouncement } from "../../redux/actions/announcementsActions";
import { useNavigate } from "react-router-dom";

const CreateAnnouncement = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const announcementCreate = useSelector((state) => state.announcementsCreate);
  const { loading, error, announcements } = announcementCreate;

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const resetHandler = () => {
    setTitle("");
    setDescription("");
    setCategory("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // dispatch create action
    dispatch(createAnnouncement(title, description, category));
    resetHandler();
    navigate("/");
  };

  return (
    <Row justify={"center"} align={"middle"}>
      <Col xl={8} md={12}>
        <Col span={24}>
          <h1>Create Announcement</h1>
        </Col>
        <Col span={24}>
          <Form
            layout="vertical"
            name="nest-messages"
            onFinish={onFinish}
            style={{ width: "100%" }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["announcment", "name"]}
              label="Title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name={["announcment", "category"]}
              label="Category"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name={["announcment", "description"]}
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Row>
                <Col span={24} align="end">
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={submitHandler}
                    loading={loading}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Col>
      </Col>
    </Row>
  );
};

export default CreateAnnouncement;
