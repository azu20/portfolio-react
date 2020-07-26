import React from 'react';
import Card from 'react-bootstrap/Card';

function Quote() {
<Card>
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        “The only thing that is stopping you from where you are to
                            where you want to go is your comfort zone”{' '}
      </p>
      <footer className="blockquote-footer">
      Dhaval Gaudier
      </footer>
    </blockquote>
  </Card.Body>
</Card>
}

export default Quote; 