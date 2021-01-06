import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

class SiteBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed:true
        };
    }

    toggleNavbar = ()=> this.setState({collapsed: !this.state.collapsed});


    render(){
        return ( 
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavLink className="navbar-brand" to="/">openMic</NavLink>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/profile/mine">My Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    SignUp/Login
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    SignUp
                                    </DropdownItem>
                                    <DropdownItem>
                                    Login
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div> 
        );
    }
};
 
export default SiteBar;