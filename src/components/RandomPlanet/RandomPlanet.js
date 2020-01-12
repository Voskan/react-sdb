import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './RandomPlanet.css';

const RandomPlanet = () => {
  return (
    <Row className="random-planet">
      <Col md="3">
        <img src="/planet.jpg" alt="" className="w-100" />
      </Col>

      <Col md="9">
        <h2>Planet Name</h2>
        <ul>
          <li>Population: 125601</li>
          <li>Rotation Pereiud: 85</li>
          <li>Diameter: 500</li>
        </ul>
      </Col>
    </Row>
  );
};

export default RandomPlanet;
