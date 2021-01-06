import React, { Component } from 'react';


class Like extends Component {

    state = { 
        count: 0,
        liked: false
     }
    
    handleIncrement = () =>{
        
        this.setState({
            count: this.state.count + 1,
            liked: !this.state.liked
        })
    };

    render() { 
        return ( 
            <div>
                <span className={this.badgeClass()}>
                    {this.formatCount()}
                </span>
                <button onClick={this.handleIncrement}>
                    <i className={this.likeClicked()} aria-hidden='true' 
                        style={{cursor:"pointer"}}>     
                    </i>
                </button>
            </div>
         );
    }
        
    formatCount(){
        const {count} = this.state
        return count === 0 ? 'Zero' : count
    }

    badgeClass(){
        let classes = 'badge m-2 badge-';
        return classes += (this.state.count === 0) ? 'secondary' : 'success';
    }

    //change in heart shape not working
    likeClicked(){
        let classes = 'fa fa-heart';
        return classes+= (this.state.liked) ? '' : '-o';
    } 

}
 
export default Like;