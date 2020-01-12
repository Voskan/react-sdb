import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ListItem from '../ItemList';
import PersonDetail from '../PersonDetail';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <RandomPlanet />

      <Row className="main-container">
        <Col md="3">
          <ListItem />
        </Col>

        <Col md="9">
          <PersonDetail />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
