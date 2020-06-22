import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import './css/Header.css'
import Server from '../Services/Server'

export default class HeaderForAuth extends Component {
    constructor(props){
        super(props);
        this.exit = this.exit.bind(this);
    };

    exit(e){
        Server.logout();
    };
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand href="#home">VakSight</Navbar.Brand>
                    <Nav className="ml-auto">
                        <NavLink><Link to='/authMain'>Оформлення</Link></NavLink>
                        <NavLink><Link to='/history'>Історія</Link></NavLink>
                        <NavLink><Link to='/' onClick={this.exit}>Вихід</Link></NavLink>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}