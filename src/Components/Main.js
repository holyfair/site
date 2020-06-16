import React, { Component } from 'react'
import './css/Main.css'
import { Nav, Tab, Col, Row } from 'react-bootstrap'
import Header from './Header'

export default class Main extends Component {
    render() {
        return (<div>
            <Header />
            <div className='main-div'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="noMargin">
                    <Col class='p-0'>
                        <Nav variant="pills" className="flex-column" >
                            <Nav.Item>
                                <Nav.Link eventKey="first">Книга</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Електронне джерело</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Частина книги</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Дисертація</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Автореферат дисертації</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sixth">Періодичне видання</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <Tab.Content >
                            <Tab.Pane eventKey="first">
                                <p>1</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h2>2</h2>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h1>3</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <h1>4</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <h1>5</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                                <h1>6</h1>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </div>
        </div>
        );
    }
};