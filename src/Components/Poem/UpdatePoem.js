import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  CustomInput,
  Col,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import Hurray from '../../Common/Hurray';


//currently unable to view edited poem on the ViewMyPoem component
class UpdatePoem extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const API_URL = `${process.env.REACT_APP_API_URL}/poetry/${this.props.poem.id}`;

    console.log(API_URL);

    const updateData = {
      title: this.props.poem.title,
      category: this.props.poem.category,
      writeUp: this.props.poem.writeUp,
      poemWriterComment: this.props.poem.poemWriterComment,
    };

    const updatePoem = () => {
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
            console.log('hurray component is next');
            this.props.onToggle();
            return <Hurray />;
          }
        });
    };
    updatePoem();
  }


  render() {
    return (
      <React.Fragment>
        <Button color="danger" onClick={this.props.onToggle}>
          Update Poem
        </Button>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Modal
            isOpen={this.props.showModal}
            toggle={this.props.onToggle}
            className={this.className}
          >
            <ModalHeader toggle={this.props.onToggle} charCode="Y">
              Edit your poem
            </ModalHeader>
            <ModalBody>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Title
                </Label>
                <Col sm={10}>
                  <Input
                    name="title"
                    placeholder="Poem title"
                    value={this.props.poem.title}
                    onChange={(event) => this.props.onTitleChange(event)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleCustomSelect" sm={2}>
                  Category
                </Label>
                <Col sm={10}>
                  <CustomInput
                    type="select"
                    id="exampleCustomSelect"
                    name="customSelect"
                    value={this.props.poem.category}
                    onChange={(event) => this.props.onCategoryChange(event)}
                  >
                    <option>Select Category</option>
                    <option>Blank verse</option>
                    <option>Rhymed poetry</option>
                    <option>Free verse</option>
                    <option>Epics</option>
                    <option>Narrative poetry</option>
                    <option>Haiku</option>
                    <option>Pastoral poetry</option>
                    <option>Sonnet</option>
                    <option>Elegies</option>
                    <option>Ode</option>
                    <option>Limerick</option>
                    <option>Lyric poetry</option>
                    <option>Ballad</option>
                    <option>Soliloquy</option>
                    <option>Villanelle</option>
                  </CustomInput>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Write Up
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="writeUp"
                    id="exampleEmail"
                    placeholder="Edit poem write up"
                    value={this.props.poem.writeUp}
                    onChange={(event) => this.props.onWriteUpChange(event)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Comment
                </Label>
                <Col sm={10}>
                  <Input
                    name="comment"
                    id="exampleEmail"
                    placeholder="Edit poem comment"
                    value={this.props.poem.poemWriteComment}
                    onChange={(event) =>
                      this.props.onPoemWriterCommentChange(event)
                    }
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
      </React.Fragment>
    );
  }
}

export default UpdatePoem;
