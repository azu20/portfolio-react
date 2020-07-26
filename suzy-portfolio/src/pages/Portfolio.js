import React from 'react';
import { Col, Row, Container } from '../components/Grid'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProjectOne from '../components/Card/CardProjectOne';
import CardProjectTwo from '../components/Card/CardProjectTwo';
import CardProjectThree from '../components/Card/CardProjectThree';
import "./portfolio.css";



const Portfolio = () => {
    return (
      <div>
      <div className="Portfolio">
        <h1>Portfolio</h1>
      <br></br>
      <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <CardProjectOne />
        </Col>
        <Col size="md-6 sm-12">
          <CardProjectTwo />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col size="md-6 sm-12">
          <CardProjectThree />
        </Col>
        <Col size="md-6 sm-12">
          <CardProjectThree />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col size="md-6 sm-12">
          <CardProjectOne />
        </Col>
        <Col size="md-6 sm-12">
          <CardProjectTwo />
        </Col>
      </Row>
    </Container>
    </div>
    </div>
  );
  };
  
  export default Portfolio;