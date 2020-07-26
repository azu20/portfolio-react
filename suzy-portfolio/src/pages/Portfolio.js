import React from 'react';
import { Col, Row, Container } from '../components/Grid'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProjectOne from '../components/Card/CardProjectOne';
import CardProjectTwo from '../components/Card/CardProjectTwo';
import CardProjectThree from '../components/Card/CardProjectThree';
import CardProjectFour from '../components/Card/CardProjectFour';
import CardProjectFive from '../components/Card/CardProjectFive';
import CardProjectSix from '../components/Card/CardProjectSix';
import Footer from '../components/Footer/Footer';
import "./portfolio.css";



const Portfolio = () => {
    return (
     
      <Container>
        <h1>Portfolio</h1>  
         
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
          <CardProjectFour />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col size="md-6 sm-12">
          <CardProjectFive />
        </Col>
        <Col size="md-6 sm-12">
          <CardProjectSix />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Footer />
    </Container>
  );
  };
  
  export default Portfolio;