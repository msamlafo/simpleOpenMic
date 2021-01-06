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
import UpdateProfile from './UpdateProfile';

//not sure how to include user firstName, lastName
class ViewMyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      profileInEdit: {},
      showModal: false,
      reload: false,
    };
  }

  getProfile = () => {
    const API_URL = `${process.env.REACT_APP_API_URL}/profile/mine`;
    fetch(`${API_URL}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: process.env.REACT_APP_user_token,
        //'Authorization': localStorage.getItem("token")
      }),
    })
      .then((result) => result.json())
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const myProfile = {
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            picUrl: response.data.picUrl,
            about: response.data.about,
            hobbies: response.data.hobbies,
            poemWriterSince: response.data.poemWriterSince,
            funFact: response.data.funFact,
            dreamJob: response.data.dreamJob,
            resumeUpload: response.data.resumeUpload,
          };
          this.setState({
            profile: myProfile,
            profileInEdit: myProfile,
            reload: false,
            showModal: false,
          });
        } else {
          console.log('Not successful');
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getProfile();
  }

  componentDidUpdate() {
    if (this.state.reload) {
      this.getProfile();
    }
  }

  handleToggle = () => {
    this.setState({
      profileInEdit: this.state.profile,
      showModal: !this.state.showModal,
    });
  };

  handleChange = (event) => {
    const value = event.currentTarget.value;
    const profileInEdit = { ...this.state.profileInEdit };
    profileInEdit[event.currentTarget.name] = value;
    this.setState({ profileInEdit });
  };

  handleReload = () => {
    this.setState({reload: true});
  };

  render() {
    const profile = this.state.profile;
    return (
      <main className="container">
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{profile.firstName}</CardTitle>
            <CardTitle tag="h5">{profile.lastName}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {profile.email}
            </CardSubtitle>
            <CardText>{profile.about}</CardText>
            <CardTitle tag="h5">{profile.hobbies}</CardTitle>
            <CardTitle tag="h5">{profile.poemWriterSince}</CardTitle>
            <CardTitle tag="h5">{profile.funFact}</CardTitle>
            <CardTitle tag="h5">{profile.dreamJob}</CardTitle>
            <CardTitle tag="h5">{profile.resumeUpload}</CardTitle>
            <Button color="primary" onClick={() => this.handleToggle()}>
              Edit Profile
            </Button>
          </CardBody>
        </Card>
        <UpdateProfile
          showModal={this.state.showModal}
          onChange={this.handleChange}
          profile={this.state.profileInEdit}
          onToggle={this.handleToggle}
          onReload={this.handleReload}
        />
      </main>
    );
  }
}

export default ViewMyProfile;
