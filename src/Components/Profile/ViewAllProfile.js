import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

class GetAllProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      hasError: false,
    };
  }
  componentDidMount() {
    const API_URL = `http://localhost:4000/profile/all`;

    const getAllProfile = () => {
      fetch(`${API_URL}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTYwOTEyODE0NCwiZXhwIjoxNjA5NzMyOTQ0fQ.A-bOvaeDKCtsQCUuf6253UYHvkdJyTD6xVC12ehnNSA',
          //'Authorization': localStorage.getItem("token")
        }),
      })
        .then((result) => result.json())
        .then((response) => {
          if (response.status === 200) {
            const profiles = [];

            response.data.map((profile, i) => {
              return profiles.push({
                firstName: profile.firstName,
                lastName: profile.lastName,
                picUrl: profile.picUrl,
                about: profile.about,
                hobbies: profile.hobbies,
                poemWriterSince: profile.poemWriterSince,
                funFact: profile.funFact,
                dreamJob: profile.dreamJob,
                resumeUpload: profile.resumeUpload,
              });
            });

            this.setState({
              profile: profiles,
            });
          } else {
            // TO DO
            // show the error in a separate component and hide the List
            console.log(response.message);
            this.setState({ hasError: true });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({ hasError: true });
        });
    };
    getAllProfile();
  }
  render() {
    return (
      <div className="container">
        {this.state.profile.map((p, i) => (
          <Card key={i} className="m-2">
            <CardImg
              top
              width="100%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">
                {p.firstName} {p.lastName}
              </CardTitle>
              <CardText className="mb-2 text-muted">{p.about}</CardText>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {p.hobbies}
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {p.poemWriterSince}
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {p.funFact}
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {p.dreamJob}
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {p.resumeUpload}
              </CardSubtitle>
              {/* disable user and profile with button */}
              <Button color="primary">Disable Profile</Button>
            </CardBody>
          </Card>
        ))}
        {this.state.hasError && '<h5>An error occured</h5>'}
      </div>
    );
  }
}

export default GetAllProfile;
