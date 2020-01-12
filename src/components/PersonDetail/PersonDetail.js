import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './PersonDetail.css';

const PersonDetail = () => {
  return (
    <Row className="detail">
      <Col md="3">
        <img src="/robot.jpg" alt="" className="w-100" />
      </Col>

      <Col md="9">
        <h2>User Name</h2>
        <ul>
          <li>Gender: robot</li>
          <li>BirthYear: 49</li>
          <li>Eye Color: red</li>
        </ul>
      </Col>
    </Row>
  );
};

export default PersonDetail;
