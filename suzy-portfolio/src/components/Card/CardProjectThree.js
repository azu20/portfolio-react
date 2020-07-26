import React from 'react';
import projectThreeImage from "../../Assets/Images/work-day-scheduler.JPG";
import Card from 'react-bootstrap/Card';


function CardProjectThree() {
    return (

<Card className="bg-dark text-white" border="primary" style={{ width: '28rem' }}>
<div class="hovereffect">
  <Card.Img src={projectThreeImage} alt="Card image" style={{ width: 450, height: 250 }} />
  <div class="overlay">
    <Card.ImgOverlay>
      <Card.Title>Work Day Scheduler</Card.Title>
      <Card.Text>
      I have created a simple calendar application that allows the user to save events for each hour of the day.
</Card.Text>
      <Card.Text>Technologies: 3rd party APIs, Moment.js, Jquery</Card.Text>
      <Card.Link href="https://azu20.github.io/Work-Day-Scheduler/">Visit</Card.Link>
      <Card.Link href="https://github.com/azu20/Work-Day-Scheduler">Github</Card.Link>
    </Card.ImgOverlay>
  </div>
</div>
</Card>
);
}
export default CardProjectThree; 
