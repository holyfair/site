import React from 'react'
import HistoryAPI from '../api'
import './css/History.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavLink, Card } from 'react-bootstrap'
import './css/Header.css'

const History = () => (
    <div>
                <Navbar bg="dark" variant="dark" sticky="top" expand='lg'>
            <Navbar.Brand href="#home">VakSight</Navbar.Brand>
            <Nav className="ml-auto">
                <NavLink><Link to='/authMain'>Оформлення</Link></NavLink>
                <NavLink><Link to='/history'>Історія</Link></NavLink>
                <NavLink><Link to='/'>Вихід</Link></NavLink>
            </Nav>
        </Navbar>
    <div className='history-main'>
        <ul>
            {HistoryAPI.all().map(p =>
                (
                    <div className='history-div'>
                    <Card bg ='light'>
                        <Card.Body>{p.name}</Card.Body>
                    </Card>
                    </div>
                ))}
        </ul>
    </div>
    </div>
);
export default History;