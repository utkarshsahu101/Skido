import React, { useEffect } from "react";
import { Col, Row, Card, Button, Typography, Input, Skeleton } from "antd";
import {
  BellOutlined,
  SmileOutlined,
  ArrowRightOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listAnnouncements } from "../../redux/actions/announcementsActions";
import axios from "axios";
const { Text, Title } = Typography;

const AnnouncementsComponent = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const announcementsList = useSelector((state) => state.announcementsList);
  const { loading, announcements, error } = announcementsList;

  const userData = useSelector((state) => state.userLogin);
  const { userInfo } = userData;

  useEffect(() => {
    dispatch(listAnnouncements());
  }, []);

  const submitAnnouncementHandler = (e) => {
    e.preventDefault();
    if (userInfo) {
      navigate("/create");
    } else navigate("/login");
  };

  return (
    <Row style={{ padding: "30px 0px" }}>
      <Col span={24}>
        <Row gutter={0.5} justify={"space-between"}>
          <Col
            xl={18}
            lg={16}
            sm={24}
            xs={{ order: 2 }}
            md={{
              order: 1,
              span: 15,
            }}
          >
            {loading ? (
              <Row gutter={[0, 16]}>
                {new Array(2).fill().map((e, index) => (
                  <Col span={24} key={index}>
                    <Card>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Skeleton
                          active
                          paragraph={{
                            rows: 0,
                          }}
                        />
                        <Skeleton
                          active
                          title={false}
                          paragraph={{
                            rows: 1,
                          }}
                        />
                        <Skeleton.Button
                          style={{ width: "30%" }}
                          active
                          title={false}
                        />
                        <Skeleton
                          paragraph={{
                            rows: 4,
                          }}
                          active
                          title={false}
                        />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            gap: 8,
                          }}
                        >
                          <Skeleton.Avatar
                            active
                            shape="circle"
                            size={"small"}
                          />
                          <Skeleton
                            active
                            paragraph={{ rows: 1 }}
                            style={{ width: "100%" }}
                            title={false}
                          />
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <Row gutter={[0, 16]}>
                {announcements
                  ?.reverse()
                  .slice(0, 10)
                  .map((announcement) => {
                    return (
                      <Col span={24} key={announcement.id}>
                        <Card>
                          <Text type="secondary" strong>
                            22/03/2022, 08:48:15
                          </Text>
                          <Title level={4} style={{ margin: "5px 0px" }}>
                            {announcement.title}
                          </Title>{" "}
                          <Col
                            style={{
                              background: "#d9363e21",
                              padding: "5px",
                              borderRadius: "5px",
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "20px",
                            }}
                            xl={5}
                            lg={8}
                            md={12}
                          >
                            <BellOutlined />
                            <Text
                              type="warning"
                              strong
                              style={{
                                letterSpacing: "0.5px",
                                marginLeft: "5px",
                              }}
                            >
                              ANNOUNCEMENTS
                            </Text>
                          </Col>
                          <div style={{ margin: "10px 0px" }}>
                            {announcement.body}
                          </div>
                          <div style={{ marginBottom: "12px" }}>
                            Skidos Team
                          </div>
                          <Row gutter={2} align={"middle"}>
                            <Col
                              xl={1}
                              md={2}
                              xs={3}
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <SmileOutlined />
                            </Col>
                            <Col xl={23} md={21} xs={19}>
                              <Input
                                placeholder="Give us some feedback"
                                style={{ borderRadius: "5px" }}
                                suffix={
                                  <ArrowRightOutlined
                                    style={{
                                      color: "#000",
                                      fontSize: "20px",
                                    }}
                                    rotate={-45}
                                    onClick={async () => {
                                      try {
                                        const config = {
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                        };
                                        let response = await axios.put(
                                          `https://jsonplaceholder.typicode.com/posts/${announcement.id}`,
                                          {
                                            ...announcement,
                                            comment: "comment",
                                          },
                                          config
                                        );
                                        if (!response.ok) {
                                          throw new Error(
                                            "Network response was not ok"
                                          );
                                        }

                                        const result = await response.json();
                                      } catch (error) {
                                        console.error(error);
                                      }
                                    }}
                                  />
                                }
                              />
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    );
                  })}
              </Row>
            )}
          </Col>
          <Col
            xl={5}
            lg={7}
            sm={24}
            xs={{ order: 1 }}
            md={{
              order: 2,
              span: 8,
            }}
          >
            <Row gutter={[0, 16]}>
              <Col span={24}>
                <Button
                  type="primary"
                  block
                  size="large"
                  style={{ borderRadius: "5px" }}
                  onClick={submitAnnouncementHandler}
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
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        width: "22px",
                        borderRadius: "5px",
                        transform: "rotate(90deg)",
                        height: "7px",
                        background: "#80808094",
                      }}
                    ></div>
                    <>ALL POSTS</>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div
                  style={{
                    width: "100%",
                    padding: "0px 10px",
                    fontWeight: "500",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        width: "22px",
                        borderRadius: "5px",
                        transform: "rotate(90deg)",
                        height: "7px",
                        background: "rgba(128, 128, 128, 34%)",
                      }}
                    ></div>
                    <>PROMOTIONS</>
                    <StarOutlined style={{ marginLeft: "5px" }} />
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <div
                  style={{
                    width: "100%",
                    padding: "5px 10px",
                    fontWeight: "500",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "22px",
                        borderRadius: "5px",
                        transform: "rotate(90deg)",
                        height: "7px",
                        background: "#ff000040",
                      }}
                    ></div>
                    <>ANNOUNCEMENTS</>
                    <BellOutlined style={{ marginLeft: "5px" }} />
                  </div>
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
