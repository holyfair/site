import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import './css/Header.css'

const HeaderForAuth = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand='lg'>
            <Navbar.Brand href="#home">VakSight</Navbar.Brand>
            <Nav className="ml-auto">
                <NavLink><Link to='/authMain'>Оформлення</Link></NavLink>
                <NavLink><Link to='/history'>Історія</Link></NavLink>
                <NavLink><Link to='/'>Вихід</Link></NavLink>
            </Nav>
        </Navbar>
    );
}
export default HeaderForAuth;