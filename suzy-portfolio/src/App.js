import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact"; 
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Container } from './components/Grid';

function App() {  
    return (
      <Router>
      <div>      
        <Navbar />
      <Container> 
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>    
        </Container>      
      </div>
    </Router>
    );
  
}

export default App;
 