import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer/Footer";
import { Col, Row, Container } from '../components/Grid';
import BioCard from "../components/Card/Bio";
import Skills from "../components/Card/Skills";
import BioContact from "../components/Card/BioContact";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <br></br>
          <br></br>
          <h1 id="aboutme">About Me</h1>
          <BioCard />
             <Skills />
        </Col>
      </Row>
        <BioContact />
        <br></br>
        <br></br>
      <Footer />
    </Container>
  );
}

export default Home;