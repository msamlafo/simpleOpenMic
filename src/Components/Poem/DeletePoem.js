import React, { Component } from 'react';
import { Alert, Button } from 'reactstrap';

class DeletePoem extends Component {
    constructor(props){
        super(props)
        this.state = {  }
        const {poem} = props;
    }

    handleDelete =() =>{
        const API_URL =`${process.env.REACT_APP_API_URL}/poetry/:poetryId`;

        const poemToDelete =()=>{
            fetch(`${API_URL}`, {
                method: "DELETE", 
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_user_token,
                    //'Authorization': localStorage.getItem("token")
                })
            })
            .then(result => result.json())
            .then(response => {
                console.log(response);
                if (response.status === 200){
                    return <h5>Poem successfully deleted</h5>
                }
            })
            .catch(err => console.log(err));
        }
        poemToDelete(); 
    }

    render() { 
        return ( 
        <Button color="danger" onClick={(p)=>this.handleDelete(this.props.poem)} >
            Delete Poem
        </Button>
        );
    }
}
 
export default DeletePoem;


// const DeletePoem =(props) =>{
//     const {onDelete, poem}=props;

//     return ( 
//             // <Alert color="danger">
//                 <Button color="danger" onClick={()=>onDelete(poem)}>Delete</Button>
//             // </Alert>
//          );
        
    
// }
 
// export default DeletePoem;