import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import './css/Header.css'

const Header = () => {
  return (
    <header>
    <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#home">VakSight</Navbar.Brand>
    <Nav className="ml-auto">
      <NavLink><Link to='/'>Оформлення</Link></NavLink>
      <NavLink><Link to='/signIn' >Вхід</Link></NavLink>
      <NavLink><Link to='/signUp' >Реєстрація</Link></NavLink>
    </Nav>
  </Navbar>
  </header>
  );
}
export default Header;