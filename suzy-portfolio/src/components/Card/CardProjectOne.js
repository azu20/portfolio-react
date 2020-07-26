import React from 'react';
import projectOneImage from "../../Assets/Images/dasflix_project.JPG";
import Card from 'react-bootstrap/Card';
// import Overlay from 'react-bootstrap/Overlay'; 



function CardProjectOne() {
  return (
    <Card className="bg-dark text-white" border="primary" style={{ width: '28rem' }}>
      <div class="hovereffect">
        <Card.Img src={projectOneImage} alt="Card image" style={{ width: 450, height: 250 }} />
        <div class="overlay">
          <Card.ImgOverlay>
            <Card.Title>DAS FLIX</Card.Title>
            <Card.Text>
              DasFlix is a CRUD MVC project, built to help end users browse, create favorite TV shows and movies. This app was created by the University of Arizona Students: Azucena Gonzalez, Denzell Grant, and Stephen Studer.
    </Card.Text>
            <Card.Text>Technologies: SQL, MySQL, CRUD, MVC, OOP</Card.Text>
            <Card.Link href="http://www.dasflix.com">Visit</Card.Link>
            <Card.Link href="https://github.com/denzgrant/DasFlix-">Github</Card.Link>
          </Card.ImgOverlay>
        </div>
      </div>
    </Card>
  );
}

export default CardProjectOne; 
