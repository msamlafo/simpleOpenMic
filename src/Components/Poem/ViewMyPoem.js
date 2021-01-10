import React, { Component } from 'react';
import { Card, Button, Badge, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import CreatePoem from './CreatePoem';
import DeletePoem from './DeletePoem';
import UpdatePoem from './UpdatePoem';

class ViewMyPoem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
      poemToEdit: {},
      showModal: false,
    };
  }

  componentDidMount() {
    const API_URL = `${process.env.REACT_APP_API_URL}/poetry/mine`;

    const getPoem = () => {
      fetch(`${API_URL}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'applicaiton/json',
          Authorization: process.env.REACT_APP_user_token,
          //'Authorization': localStorage.getItem("token")
        }),
      })
        .then((result) => result.json())
        .then((response) => {
          if (response.status === 200) {
            const myPoem = [];

            response.data.map((poem, i) => {
              return myPoem.push({
                id: poem.id,
                title: poem.title,
                author:
                  poem.user?.profile?.firstName +
                  ' ' +
                  poem.user?.profile?.lastName,
                category: poem.category,
                writeUp: poem.writeUp,
              });
            });
            this.setState({ poems: myPoem });
          }
        })
        .catch((err) => console.log(err));
    };
    getPoem();
  }

  handleToggle = () => {
    this.setState({showModal : !this.state.showModal});
  };

  handleEdit = (poem) => {
    console.log(poem);
    const state = { ...this.state };
    state.poemToEdit = { ...poem };
    state.showModal = true;
    this.setState(state);
    console.log(this.state);
  };

  handleCreate = () =>{
    console.log("create poem button clicked");
    const state = { ...this.state };
    state.showModal = true;
    this.setState(state);
  }

  handleDelete = (poem) => {
    console.log(poem);
    const poems = this.state.poems.filter((p) => p.id !== poem.id);
    this.setState({ poems });
  };

  handleTitleChange = (event) => {
    event.preventDefault();
    const poemToEdit = { ...this.state.poemToEdit };
    poemToEdit.title = event.target.value;
    this.setState({ poemToEdit });
  };

  handleCategoryChange = (event) => {
    event.preventDefault();
    const poemToEdit = { ...this.state.poemToEdit };
    poemToEdit.category = event.target.value;
    this.setState({ poemToEdit });
  };

  handleWriteUpChange = (event) => {
    event.preventDefault();
    const poemToEdit = { ...this.state.poemToEdit };
    poemToEdit.writeUp = event.target.value;
    this.setState({ poemToEdit });
  };

  handlePoemWriterCommentChange = (event) => {
    event.preventDefault();
    const poemToEdit = { ...this.state.poemToEdit };
    poemToEdit.poemWriteComment = event.target.value;
    this.setState({ poemToEdit });
  };

  renderPoem() {
    return this.state.poems.length === 0 ? (
      <div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader>openMic Poems</ToastHeader>
          <ToastBody>You do not have any poems. Create a new poem</ToastBody>
          {/* insert CreatePoem button here */}
          <Button onClick={() => this.handleCreate()} color="dark">Create poem</Button>
        </Toast>
      </div>
    ) : (
        <React.Fragment>
            <h5>You have 
                <span> <Badge color="primary" >
                    {this.state.poems.length} 
                     </Badge>{" "}
                 </span> 
                    poems.</h5>


            {this.state.poems.map((p, i) => (
              <Card body outline color="primary" className="m-2">
                <CardTitle tag="h5"> {p.title} </CardTitle>
                <CardSubtitle className="mb-2 text-muted">
                  Category: {p.category}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted">by {p.author}</CardSubtitle>
                <CardText> {p.writeUp} </CardText>
                <Button
                  color="primary"
                  className="mb-2"
                  onClick={() => this.handleEdit(p)}
                >
                  Edit Poem
                </Button>
                <DeletePoem poem={p} />
              </Card>
            ))}
        </React.Fragment>
    );
  }

  render() {
    return (
    <main className="container">
        {this.renderPoem()}
        <UpdatePoem 
            poem={this.state.poemToEdit}
            showModal={this.state.showModal}
            onToggle={this.handleToggle}
            onCategoryChange={this.handleCategoryChange}
            onWriteUpChange={this.handleWriteUpChange}
            onTitleChange={this.handleTitleChange}
            onPoemWriterCommentChange={this.handlePoemWriterCommentChange}
            getPoem={this.getPoem}
        />
        <CreatePoem 
          showModal={this.state.showModal}
          onToggle={this.handleToggle}
        />
    </main>
    );
  }
}

export default ViewMyPoem;
