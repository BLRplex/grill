import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import GrillSurface from "./GrillSurface";
import OutOfGrillList from "./OutOfGrillList";
import JSONInput from "./JSONInput";

const Grill = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <GrillSurface />
        </Col>
        <Col md={4}>
          <OutOfGrillList />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <JSONInput />
        </Col>
      </Row>
    </Container>
  );
};

export default Grill;
