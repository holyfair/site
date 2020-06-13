import React from 'react'
import './css/Main.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import './css/Header.css'

const Main = () => (
    <div>
        <Navbar bg="dark" variant="dark" sticky="top" expand='lg'>
            <Navbar.Brand href="#home">VakSight</Navbar.Brand>
            <Nav className="ml-auto">
                <NavLink><Link to='/authMain'>Оформлення</Link></NavLink>
                <NavLink><Link to='/history'>Історія</Link></NavLink>
                <NavLink><Link to='/main'>Вихід</Link></NavLink>
            </Nav>
        </Navbar>
        <div className='main-div'>
            <Nav defaultActiveKey="link-1" className='flex-column' variant='pills' fill>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Книга</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Електронне джерело</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Частина книги</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Дисертація</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5">Автореферат дисертації</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-6">Періодичне видання</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    </div>
);
export default Main;