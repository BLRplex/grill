import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import GrillSurface from "./GrillSurface";
import OutOfGrillList from "./OutOfGrillList";
import JSONInput from "./JSONInput";

const Grill = () => {
  return (
    <Container style={{ marginTop: 32 }}>
      <Row>
        <Col md={8}>
          <GrillSurface />
          <JSONInput />
        </Col>
        <Col md={4}>
          <OutOfGrillList />
        </Col>
      </Row>
    </Container>
  );
};

export default Grill;
