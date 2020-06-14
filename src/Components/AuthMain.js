import React from 'react'
import './css/Main.css'
import {Nav} from 'react-bootstrap'
import HeaderForAuth from './HeaderForAuth'


const Main = () => (
    <div>
        <HeaderForAuth/>
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