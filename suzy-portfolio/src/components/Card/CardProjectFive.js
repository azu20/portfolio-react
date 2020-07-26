import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardProjectFive() {
    return (
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="hovereffect ">
        <img class="img-responsive" src="./Assets/Images/TeamGenerator2.png" alt="Project#5" />
    <div class="overlay">
        {/* <div class="col-md-4">
            <img src="..." class="card-img" alt="...">
    <div class="col-md-8"> */}
      <div class="card-body">
        <h1 class="card-title">OOP: Team Generator</h1>
        <h2>Individual Project</h2>
        <p class="card-text">This command line application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.</p>
        <p class="card-text"><small class="text-muted">Technologies:</small></p>
        <a class="info" href="...">Command Line App</a>
        <a class="info" href="https://github.com/azu20/Team-generator">Github</a>
        </div>
        </div>
  </div>
</div>
</div>
    );
}

export default CardProjectFive; 