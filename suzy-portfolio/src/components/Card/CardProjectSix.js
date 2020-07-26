import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardProjectFive() {
    return (
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="hovereffect ">
        <img class="img-responsive" src="./Assets/Images/hamburger.JPG" alt="Project#6" />
    <div class="overlay">
        {/* <div class="col-md-4">
            <img src="..." class="card-img" alt="...">
    <div class="col-md-8"> */}
      <div class="card-body">
        <h1 class="card-title">Full Stack: Burger App</h1>
        <h2>Individual Project</h2>
        <p class="card-text">This is the first Full Stack App I created. This burger logging app uses MySQL, Node, Express, Handlebars and a homemade ORM (yum!). It also applies the MVC design pattern.</p>
        <p class="card-text"><small class="text-muted">Technologies:</small></p>
        <a class="info" href="https://desolate-wave-36352.herokuapp.com/">Visit</a>
        <a class="info" href="https://github.com/azu20/burger-full-stack-app">Github</a>
        </div>
        </div>
  </div>
</div>
</div>
    );
}

export default CardProjectFive; 