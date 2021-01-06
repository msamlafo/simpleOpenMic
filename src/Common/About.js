import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const About = (props) => {
    return ( 
        
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">About openMic</h1>
          <p className="lead">Mic out what you write!</p>
        </Container>
      </Jumbotron>

    );
}
 
export default About;