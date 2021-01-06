import React, { Component } from 'react';
import { CustomInput, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Hurray from '../../Common/Hurray';

class CreatePoem extends Component {
    constructor(props){
        super(props);
        this.state = { 
            createdPoem:{
                title:"",
                category:"",
                writeUp:"",
                poemWriterComment:""
            },
        }
    }

    handleSubmit(event){
        event.preventDefault();
        const API_URL= `${process.env.REACT_APP_API_URL}/poetry/create`

        const postData = {
            title : this.state.createdPoem.title,
            category: this.state.createdPoem.category,
            writeUp: this.state.createdPoem.writeUp,
            poemWriterComment: this.state.createdPoem.poemWriterComment
        };

        const createPoem =()=>{
            fetch (`${API_URL}`, {
                method: 'POST',
                body:JSON.stringify(postData),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_user_token
                })
            })
            .then((result) => result.json())
            .then((response) => {
                console.log(response);
                if (response.status === 200){
                    // instead of setting the state, go to a new component that displays either the new record and/or a success message
                    return (<Hurray />)
                }
                else{
                    // let the user know something bad happened
                }
            })
        }
        createPoem();
    };

    handleTitleChange=(event)=>{
        event.preventDefault();
        const createdPoem={...this.state.createdPoem};
        createdPoem.title = event.target.value;
        this.setState({createdPoem});
    }

    handleCategoryChange=(event)=>{
        event.preventDefault();
        const createdPoem={...this.state.createdPoem};
        createdPoem.category = event.target.value;
        this.setState({createdPoem});
    }

    handleWriteUpChange=(event)=>{
        event.preventDefault();
        const createdPoem={...this.state.createdPoem};
        createdPoem.writeUp = event.target.value;
        this.setState({createdPoem});
    }

    handlePoemWriterCommentChange=(event)=>{
        event.preventDefault();
        const createdPoem = {...this.state.createdPoem};
        createdPoem.poemWriterComment = event.target.value;
        this.setState({createdPoem});
    }
    
    render() { 
        return ( 
            <main className="container">
                <Form onSubmit={event => this.handleSubmit(event)}>
                    <FormGroup>
                        <Label hidden>Title</Label> 
                        <Input type="text" placeholder="Title" value={this.state.createdPoem.title} onChange={(event)=>this.handleTitleChange(event)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleCustomSelect" hidden >Category</Label>
                        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                        <option value={this.state.category}
                        onChange={(event)=>this.handleCategoryChange(event)} >Select Category</option>
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
                    </FormGroup>
                    <FormGroup>
                        <Label for="writeUp" hidden>Poem Write Up</Label>
                        <Input type="textarea" name="text" value={this.state.writeUp} onChange={(event) =>{this.handleWriteUpChange(event)}} id="exampleText" placeholder="Poem Write Up"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="poemWriterComment" hidden>Poem Writer Comment</Label>
                        <Input type="textarea" name="text" value={this.state.poemWriterComment} onChange={(event)=>this.handlePoemWriterCommentChange(event)} id="exampleText" placeholder="Comment"/>
                    </FormGroup>
                    <Button type="submit" color="primary" size="lg">Create Poem</Button>
                </Form>
            </main>
         );
    }
}
 
export default CreatePoem;