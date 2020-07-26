import React from 'react';
import Card from 'react-bootstrap/Card';
import Resume from "../../Assets/Images/Suzy-resume-2020.pdf";



function ContactCard() {
  return (
<Card>
  <Card.Header><h1>Contact Me</h1></Card.Header>
  <Card.Body>
    <Card.Title>Let's get to know each other!</Card.Title>
    <Card.Text>
      Email me:<Card.Link href="azucenaphx@gmail.com">zucenaphx@gmail.com</Card.Link>
      </Card.Text>
      <Card.Text>
      Visit my LinkedIn: <Card.Link href="https://www.linkedin.com/in/azucenahgonzalez/">Visit my Linkedin</Card.Link>
       </Card.Text>
       <Card.Text>
      Visit my Github: <Card.Link href="https://github.com/azu20">Visit My Github</Card.Link>
       </Card.Text>
       <Card.Text>
      View my Resume: <Card.Link href={Resume}>zucenaphx@gmail.com</Card.Link>
    </Card.Text>
   
  </Card.Body>
</Card>
  );
}

export default ContactCard; 