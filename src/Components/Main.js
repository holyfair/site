import React, { Component } from 'react'
import './css/Main.css'
import { Nav, Tab, Col, Row, InputGroup, FormControl, Button } from 'react-bootstrap'
import Header from './Header'
import Server from '../Services/Server'
import { Card } from 'react-bootstrap'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.sendRequest = this.sendRequest.bind(this);
        this.getFirstName = this.getFirstName.bind(this);
        this.getLastName = this.getLastName.bind(this);
        this.getFathersName = this.getFathersName.bind(this);
        this.getJobName = this.getJobName.bind(this);
        this.getYearOfPublication = this.getYearOfPublication.bind(this);
        this.getPublication = this.getPublication.bind(this);
        this.getLinkToSource = this.getLinkToSource.bind(this);

        this.state = {
            jobName: '',
            yearOfPublication: '',
            publication: '',
            linkToSource: '',
            firstName: '',
            lastName: '',
            surname: '',
            type: '',
            data: ''
        };
    };
    getFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    };
    getLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    };
    getFathersName(e) {
        this.setState({
            surname: e.target.value
        });
    };
    getJobName(e) {
        this.setState({
            jobName: e.target.value
        });
    };
    getYearOfPublication(e) {
        this.setState({
            yearOfPublication: e.target.value
        });
    };
    getPublication(e) {
        this.setState({
            publication: e.target.value
        });
    };
    getLinkToSource(e) {
        this.setState({
            linkToSource: e.target.value
        });
    };
    sendRequest(e) {
        e.preventDefault();
        const ElectronicSource = {
            'jobName': this.state.jobName,
            'yearOfPublication': this.state.yearOfPublication,
            'linkToSource': this.state.linkToSource,
            'authors': [{
                'firstName': this.state.firstName,
                'lastName': this.state.lastName,
                'surname': this.state.surname
            }],
            'type': 'Electronic'
        };
        // this.setState({
        //     data: Server.source(ElectronicSource)
        // });
        Server.source(ElectronicSource).then(res => {
            this.setState({
                data: res
            })
        });
        console.log(this.state.data);
    };
    render() {
        return (<div>
            <Header />
            <div className='main-div'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                    <Row className="noMargin">
                        <Col sm={3}>
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
                        <Col sm={9}>
                            <Tab.Content >
                                <Tab.Pane eventKey="first">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder='Прізвище' value={this.state.lastName} onChange={this.getLastName} />
                                        <FormControl placeholder="Ім'я" value={this.state.firstName} onChange={this.getFirstName} />
                                        <FormControl placeholder='По батькові' value={this.state.surname} onChange={this.getFathersName} />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Назва роботи</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            value={this.state.jobName}
                                            onChange={this.getJobName}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Видавництво</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Рік видання</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Кількість сторінок</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Видання</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Серія</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Номер періодичного випуску</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                        />
                                    </InputGroup>
                                    <Button variant="primary" size="lg" active>
                                        Оформити
                                    </Button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Назва роботи</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            value={this.state.jobName}
                                            onChange={this.getJobName}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Рік видання</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            value={this.state.yearOfPublication}
                                            onChange={this.getYearOfPublication}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Видання</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            value={this.state.publication}
                                            onChange={this.getPublication}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">Посилання на джерело</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            value={this.state.linkToSource}
                                            onChange={this.getLinkToSource}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder='Прізвище' value={this.state.lastName} onChange={this.getLastName} />
                                        <FormControl placeholder="Ім'я" value={this.state.firstName} onChange={this.getFirstName} />
                                        <FormControl placeholder='По батькові' value={this.state.surname} onChange={this.getFathersName} />
                                    </InputGroup>
                                    <Button variant="primary" size="lg" active onClick={this.sendRequest}>
                                        Оформити
                                    </Button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h1>Частина книги</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <h1>Дисертація</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <h1>Автореферат дисертації</h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <h1>Періодичне видання</h1>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
            <Card bg='light'>
                <Card.Body>{this.state.data}</Card.Body>
            </Card>
        </div>
        );
    }
};