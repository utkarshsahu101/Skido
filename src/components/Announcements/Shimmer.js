import React from "react";
import { Col, Row, Card, Skeleton } from "antd";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <Row gutter={[0, 16]}>
      {new Array(2).fill().map((e, index) => (
        <Col span={24} key={index}>
          <Card>
            <div className="skeletonWrapper">
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
              <Skeleton.Button style={{ width: "30%" }} active title={false} />
              <Skeleton
                paragraph={{
                  rows: 4,
                }}
                active
                title={false}
              />
              <div className="commentWrapper">
                <Skeleton.Avatar active shape="circle" size={"small"} />
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
  );
};

export default Shimmer;
