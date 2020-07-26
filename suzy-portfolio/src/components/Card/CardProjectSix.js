import React from 'react';
import projectSixImage from "../../Assets/Images/hamburger.JPG";
import Card from 'react-bootstrap/Card';
// import Overlay from 'react-bootstrap/Overlay'; 



function CardProjectSix() {
  return (
    <Card className="bg-dark" border="primary" style={{ width: '28rem' }}>
      <div class="hovereffect">
        <Card.Img src={projectSixImage} alt="Card image" style={{ width: 450, height: 250 }} />
        <div class="overlay">
          <Card.ImgOverlay>
            <Card.Title>Full Stack: Burger App</Card.Title>
            <Card.Subtitle>Individual Project</Card.Subtitle>
            <Card.Text>
            This is the first Full Stack App I created. This burger logging app uses MySQL, Node, Express, Handlebars and a homemade ORM (yum!). It also applies the MVC design pattern.
    </Card.Text>
            <Card.Text>Technology/Concepts: 3rd party APIs, Moment.js, Jquery</Card.Text>
            <Card.Link href="https://desolate-wave-36352.herokuapp.com/">Visit</Card.Link>
            <Card.Link href="https://github.com/azu20/burger-full-stack-app">Github</Card.Link>
          </Card.ImgOverlay>
        </div>
      </div>
    </Card>
  );
}

export default CardProjectSix; 