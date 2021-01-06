import React, { Component } from 'react';
import { Alert, Jumbotron } from 'reactstrap';


class Hurray extends Component {
    render() { 
        return ( 
            <div>
                <Jumbotron>
            <Alert className="display-3" color="success">
                What you did was a great success!
            </Alert>

                </Jumbotron>
            </div>
         );
    }
}
 
export default Hurray;