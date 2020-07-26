import React from 'react';
import projectFiveImage from "../../Assets/Images/Employee_tracking.JPG";
import Card from 'react-bootstrap/Card';
// import Overlay from 'react-bootstrap/Overlay'; 



function CardProjectFive() {
  return (
    <Card className="bg-dark" border="primary" style={{ width: '28rem' }}>
      <div class="hovereffect">
        <Card.Img src={projectFiveImage} alt="Card image" style={{ width: 450, height: 250 }} />
        <div class="overlay">
          <Card.ImgOverlay>
            <Card.Title>Team Generator</Card.Title>
            <Card.Subtitle>Individual Project</Card.Subtitle>
            <Card.Text>
            This command line application will prompt the user for information about the team manager and then information about the team members. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.
    </Card.Text>
            <Card.Text>Technology/Concepts: OOP, Axios, MySQL, Sequelize</Card.Text>
            <Card.Link href="https://github.com/azu20/Team-generator">This app is deployed on your command line</Card.Link>
            <Card.Link href="https://github.com/azu20/Team-generator">Github</Card.Link>
          </Card.ImgOverlay>
        </div>
      </div>
    </Card>
  );
}

export default CardProjectFive; 