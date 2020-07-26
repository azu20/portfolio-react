import React from 'react';
import projectFourImage from "../../Assets/Images/Employee_tracking.JPG";
import Card from 'react-bootstrap/Card';
// import Overlay from 'react-bootstrap/Overlay'; 



function CardProjectFour() {
  return (
    <Card className="bg-dark" border="primary" style={{ width: '28rem' }}>
      <div class="hovereffect">
        <Card.Img src={projectFourImage} alt="Card image" style={{ width: 450, height: 250 }} />
        <div class="overlay">
          <Card.ImgOverlay>
            <Card.Title>MySQL Employee Tracker</Card.Title>
            <Card.Subtitle>Individual Project</Card.Subtitle>
            <Card.Text>
            This command-line interface (Content Management System) will architect and build a solution for managing employees using node, inquirer, and MySQL.
    </Card.Text>
            <Card.Text>Technology/Concepts: Node, Inquirer,JQuery, MySQL, SQL</Card.Text>
            <Card.Link href="https://github.com/azu20/Employee-Management-System-MySQL">This app is deployed on your command line</Card.Link>
            <Card.Link href="https://github.com/azu20/Employee-Management-System-MySQL">Github</Card.Link>
          </Card.ImgOverlay>
        </div>
      </div>
    </Card>
  );
}

export default CardProjectFour; 
