import React, { Component } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
import PagesPagination from '../../Common/PagesPagination';
import Like from '../../Common/Like';
import {Paginate} from '../../Common/Paginate';

class ViewPoem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
      pageSize: 3,
      currentPage: 1,
      sort: 'name',
    };
  }

  handlePageChange = (page) =>{
    this.setState({ currentPage:page })
  }

  componentDidMount() {
    const API_URL = `${process.env.REACT_APP_API_URL}/poetry/`;

    const getPoems = () => {
      fetch(`${API_URL}`, {
        method: 'GET',
        //Authorization: localStorage.getItem('token'),
      })
        .then((result) => result.json())
        .then((poems) => {
          console.log(poems);
          const newStatePoem = [];
          if (poems.data.length > 0) {
            poems.data.map((p) =>
              newStatePoem.push({
                id:p.id,
                title: p.title,
                author:
                  p.user?.profile.firstName + ' ' + p.user?.profile.lastName,
                category: p.category,
                writeUp: p.writeUp,
              })
            );
            console.log(newStatePoem);
            this.setState({
              poems: newStatePoem,
            });
          }
        })
        .catch((err) => console.log(err));
    };

    getPoems();
  }

  render() {
    const poems = Paginate(this.state.poems, this.state.currentPage, this.state.pageSize);
    
    return (
      <React.Fragment>
        {(poems.length === 0) && (
          <p> There are no poems. Create a new poem </p>
        )} 
        <div>
          {poems.map((p, i) => (
            <Card key={i} body outline color="primary">
              <CardBody>
                <CardTitle tag="h5"> {p.title} </CardTitle>
                <CardSubtitle className="mb-2 text-muted">
                  Category: {p.category}
                </CardSubtitle>
                <CardSubtitle className="mb-2 text-muted">
                  by {p.author}
                </CardSubtitle>
                <CardText> {p.writeUp} </CardText>
                <Like />
              </CardBody>
            </Card>
          ))}
          <PagesPagination itemsCount={this.state.poems.length} pageSize={this.state.pageSize} currentPage={this.state.currentPage} onPageChange={this.handlePageChange}/>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {this.state.poems.map((p, i) =>(
              <tr key={i}>
                <td>{p.title}</td>
                <td>{p.category}</td>
                <td>{p.author}</td>
                <td><Button color="danger">Delete</Button></td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewPoem;
