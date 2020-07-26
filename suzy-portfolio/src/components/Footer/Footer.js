import React from "react";
import Navbar from 'react-bootstrap/Navbar'

function Footer() {
    return (
<Navbar fixed="bottom" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      {' '}
      &copy;Suzy Gonzalez
    </Navbar.Brand>
  </Navbar>
  );
}

export default Footer; 