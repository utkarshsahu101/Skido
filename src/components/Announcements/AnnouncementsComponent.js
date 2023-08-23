import React from "react";
import { Col, Row, Card, Button, Typography, Space, Input } from "antd";
import {
  BellOutlined,
  SmileOutlined,
  ArrowRightOutlined,
  StarOutlined,
} from "@ant-design/icons";
const { Text, Title } = Typography;

const AnnouncementsComponent = () => {
  return (
    <Row style={{ padding: "30px 0px" }}>
      <Col span={24}>
        <Row gutter={0.5} justify={"space-between"}>
          <Col span={18}>
            <Card
              style={{
                height: "100%",
              }}
            >
              <Text type="secondary" strong>
                22/03/2022, 08:48:15
              </Text>
              <Title level={4} style={{ margin: "5px 0px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </Title>{" "}
              <div
                style={{
                  background: "#d9363e21",
                  padding: "5px",
                  borderRadius: "5px",
                  maxWidth: "25%",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <BellOutlined />
                <Text
                  type="warning"
                  strong
                  style={{ letterSpacing: "0.5px", marginLeft: "5px" }}
                >
                  ANNOUNCEMENTS
                </Text>
              </div>
              <div style={{ margin: "10px 0px" }}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </div>
              <div style={{ marginBottom: "12px" }}>Skidos Team</div>
              <Row gutter={2} align={"middle"}>
                <Col
                  span={1}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <SmileOutlined />
                </Col>
                <Col span={23}>
                  <Input
                    placeholder="Give us some feedback"
                    style={{ borderRadius: "5px" }}
                    suffix={
                      // <Tooltip title="Extra information">
                      <ArrowRightOutlined
                        style={{
                          color: "#000",
                          fontSize: "20px",
                        }}
                        rotate={-45}
                      />
                      // {/* </Tooltip> */}
                    }
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={5}>
            <Row gutter={[0, 16]}>
              <Col span={24}>
                <Button
                  type="primary"
                  block
                  size="large"
                  style={{ borderRadius: "5px" }}
                >
                  Submit an announcement
                </Button>
              </Col>
              <Col span={24}>
                <div
                  style={{
                    width: "100%",
                    background: "#d7dbdf82",
                    padding: "10px",
                    borderRadius: "5px",
                    fontWeight: "500",
                  }}
                >
                  <span style={{ width: "2px" }}>|</span> ALL POSTS
                </div>
              </Col>
              <Col span={24}>
                <div
                  style={{
                    width: "100%",
                    padding: "0px 10px",
                    borderRadius: "5px",
                    fontWeight: "500",
                  }}
                >
                  <span style={{ width: "2px" }}>|</span>PROMOTIONS
                  <StarOutlined />
                </div>
              </Col>
              <Col span={24}>
                <div
                  style={{
                    width: "100%",
                    padding: "0px 10px",
                    borderRadius: "5px",
                    fontWeight: "500",
                  }}
                >
                  <span style={{ width: "2px" }}>|</span>ANNOUNCEMENTS
                  <BellOutlined />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AnnouncementsComponent;
