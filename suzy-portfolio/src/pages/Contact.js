
import React from "react";
import ContactCard from "../components/Card/Contact"; 
import "./Contact.css";
import Footer from "../components/Footer/Footer";
import { Container } from "../components/Grid";

function Contact() {
    return (
        <Container>
        <ContactCard />
        <Footer />
        </Container>
    );
  }
  
  export default Contact;
  