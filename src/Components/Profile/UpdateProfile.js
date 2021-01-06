import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

class UpdateProfile extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const API_URL = `${process.env.REACT_APP_API_URL}/profile`;

    console.log(API_URL);

    const updateData = {
      firstName: this.props.profile.firstName,
      lastName: this.props.profile.lastName,
      picUrl: this.props.profile.picUrl,
      about: this.props.profile.about,
      hobbies: this.props.profile.hobbies,
      poemWriterSince: this.props.profile.poemWriterSince,
      funFact: this.props.profile.funFact,
      dreamJob: this.props.profile.dreamJob,
      resumeUpload: this.props.profile.resumeUpload,
    };

    const updateProfile = () => {
      fetch(`${API_URL}`, {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: process.env.REACT_APP_user_token,
        }),
      })
        .then((result) => result.json())
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.props.onToggle();
            this.props.onReload();
          }
        })
        .catch((err) => console.log(err));
    };
    updateProfile();
  }

  render() {
    return (
      <div>
        <Form>
          <Modal
            isOpen={this.props.showModal}
            toggle={this.props.onToggle}
            className={this.className}
          >
            <ModalHeader toggle={this.props.onToggle} charCode="X">
              Edit your profile
            </ModalHeader>
            <ModalBody>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  First Name
                </Label>
                <Col sm={10}>
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    value={this.props.profile.firstName}
                    onChange={(event) => this.props.onChange(event)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Last Name
                </Label>
                <Col sm={10}>
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={this.props.profile.lastName}
                    onChange={(event) => this.props.onChange(event)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  About
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="about"
                    id="exampleEmail"
                    placeholder="Write about yourself"
                    value={this.props.profile.about}
                    onChange={(event) => this.props.onChange(event)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Hobbies
                </Label>
                <Col sm={10}>
                  <Input
                    name="hobbies"
                    placeholder="Hobbies"
                    value={this.props.profile.hobbies}
                    onChange={(event) => this.props.onChange(event)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Dream Job
                </Label>
                <Col sm={10}>
                  <Input
                    name="dreamJob"
                    placeholder="Dream Job"
                    value={this.props.profile.dreamJob}
                    onChange={(event) => this.props.onChange(event)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Fun Fact
                </Label>
                <Col sm={10}>
                  <Input
                    name="comment"
                    id="exampleEmail"
                    placeholder="Add Fun Fact"
                    value={this.props.profile.funFact}
                    onChange={(event) => this.props.onChange(event)}
                  />
                </Col>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                type="submit"
                onClick={(event) => this.handleSubmit(event)}
              >
                Do Update poem
              </Button>{' '}
              <Button color="secondary" onClick={this.props.onToggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Form>
      </div>
    );
  }
}

export default UpdateProfile;
