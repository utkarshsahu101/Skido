import React, { useEffect } from "react";
import { Col, Row, Card, Button, Typography, Input } from "antd";
import {
  BellOutlined,
  SmileOutlined,
  ArrowRightOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "./Announcements.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listAnnouncements } from "../../redux/actions/announcementsActions";
import axios from "axios";
import Shimmer from "./Shimmer";
const { Text, Title } = Typography;

const AnnouncementsComponent = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const announcementsList = useSelector((state) => state.announcementsList);
  const { loading, announcements, error } = announcementsList;

  const userData = useSelector((state) => state.userLogin);
  const { userInfo } = userData;

  useEffect(() => {
    // dispatch announcements once - componentdidmount
    dispatch(listAnnouncements());
  }, []);

  const submitAnnouncementHandler = (e) => {
    e.preventDefault();
    if (userInfo) {
      // if user present redirect to create page else to login
      navigate("/create");
    } else navigate("/login");
  };

  return (
    <Row className="announcementsWrapper">
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
            {/* shimmer/ skeleton on fetching announcements */}
            {loading ? (
              <Shimmer />
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
                          <Title level={4} className="announcementTitle">
                            {announcement.title}
                          </Title>{" "}
                          <Col
                            className="announcementBellWrapper"
                            xl={5}
                            lg={8}
                            md={12}
                          >
                            <BellOutlined />
                            <Text
                              type="warning"
                              strong
                              className="announcementText"
                            >
                              ANNOUNCEMENTS
                            </Text>
                          </Col>
                          <div className="announcementBody">
                            {announcement.body}
                          </div>
                          <div className="skidosTeamText">Skidos Team</div>
                          <Row gutter={2} align={"middle"}>
                            <Col xl={1} md={2} xs={3} className="smiley">
                              <SmileOutlined />
                            </Col>
                            <Col xl={23} md={21} xs={19}>
                              <Input
                                placeholder="Give us some feedback"
                                style={{ borderRadius: "5px" }}
                                suffix={
                                  <ArrowRightOutlined
                                    className="arrow"
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
                  className="submitAnnouncementBtn"
                  onClick={submitAnnouncementHandler}
                >
                  Submit an announcement
                </Button>
              </Col>
              <Col span={24}>
                <div className="allPostsContentWrapper">
                  <div className="allPostsThickLine thickLine"></div>
                  <>ALL POSTS</>
                </div>
              </Col>
              <Col span={24}>
                <div className="promotionsContentWrapper">
                  <div className="promotionsThickLine thickLine"></div>
                  <>PROMOTIONS</>
                  <StarOutlined style={{ marginLeft: "5px" }} />
                </div>
              </Col>
              <Col span={24}>
                <div className="announcementsContentWrapper">
                  <div className="announcementsThickLine thickLine"></div>
                  <>ANNOUNCEMENTS</>
                  <BellOutlined style={{ marginLeft: "5px" }} />
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
