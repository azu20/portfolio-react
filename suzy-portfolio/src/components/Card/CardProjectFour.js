import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardProjectFour() {
    return (
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="hovereffect ">
        <img class="img-responsive" src="./Assets/Images/Employee_tracking.JPG" alt="Project#4" />
    <div class="overlay">
        {/* <div class="col-md-4">
            <img src="..." class="card-img" alt="...">
    <div class="col-md-8"> */}
      <div class="card-body">
        <h1 class="card-title">MySQL Employee Tracker</h1>
        <h2>Individual Project</h2>
        <p class="card-text">This command-line interface (Content Management System) will architect and build a solution for managing a company's employees using node, inquirer, and MySQL.</p>
        <p class="card-text"><small class="text-muted">Technologies:</small></p>
        <a class="info" href="...">Command Line App</a>
        <a class="info" href="https://github.com/azu20/Employee-Management-System-MySQL">Github</a>
        </div>
        </div>
  </div>
</div>
</div>
    );
}

export default CardProjectFour; 
