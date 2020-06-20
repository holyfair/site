import React, { Component } from 'react'
import './css/Main.css'
import { Nav, Tab, Col, Row, InputGroup, FormControl, Button, Card, Tabs, Form } from 'react-bootstrap'
import Header from './Header'
import Server from '../Services/Server'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.sendElectronicRequest0 = this.sendElectronicRequest0.bind(this);
        this.sendElectronicRequest1 = this.sendElectronicRequest1.bind(this);
        this.sendElectronicRequest2 = this.sendElectronicRequest2.bind(this);
        this.sendElectronicRequest3 = this.sendElectronicRequest3.bind(this);
        this.sendElectronicRequest4 = this.sendElectronicRequest4.bind(this);

        this.getJobName = this.getJobName.bind(this);
        this.getYearOfPublication = this.getYearOfPublication.bind(this);
        this.getPublication = this.getPublication.bind(this);
        this.getLinkToSource = this.getLinkToSource.bind(this);

        this.getFirstName1 = this.getFirstName1.bind(this);
        this.getLastName1 = this.getLastName1.bind(this);
        this.getFathersName1 = this.getFathersName1.bind(this);

        this.getFirstName2 = this.getFirstName2.bind(this);
        this.getLastName2 = this.getLastName2.bind(this);
        this.getFathersName2 = this.getFathersName2.bind(this);

        this.getFirstName3 = this.getFirstName3.bind(this);
        this.getLastName3 = this.getLastName3.bind(this);
        this.getFathersName3 = this.getFathersName3.bind(this);

        this.getFirstName4 = this.getFirstName4.bind(this);
        this.getLastName4 = this.getLastName4.bind(this);
        this.getFathersName4 = this.getFathersName4.bind(this);

        this.state = {
            jobName: '',
            yearOfPublication: '',
            publication: '',
            linkToSource: '',
            type: '',
            data: '',
            loading: false,

            firstName1: '',
            lastName1: '',
            surname1: '',
            firstName2: '',
            lastName2: '',
            surname2: '',
            firstName3: '',
            lastName3: '',
            surname3: '',
            firstName4: '',
            lastName4: '',
            surname4: ''
        };
    };
    getFirstName1(e) {
        this.setState({
            firstName1: e.target.value
        });
    };
    getLastName1(e) {
        this.setState({
            lastName1: e.target.value
        });
    };
    getFathersName1(e) {
        this.setState({
            surname1: e.target.value
        });
    };
    getFirstName2(e) {
        this.setState({
            firstName2: e.target.value
        });
    };
    getLastName2(e) {
        this.setState({
            lastName2: e.target.value
        });
    };
    getFathersName2(e) {
        this.setState({
            surname2: e.target.value
        });
    };
    getFirstName3(e) {
        this.setState({
            firstName3: e.target.value
        });
    };
    getLastName3(e) {
        this.setState({
            lastName3: e.target.value
        });
    };
    getFathersName3(e) {
        this.setState({
            surname3: e.target.value
        });
    };
    getFirstName4(e) {
        this.setState({
            firstName4: e.target.value
        });
    };
    getLastName4(e) {
        this.setState({
            lastName4: e.target.value
        });
    };
    getFathersName4(e) {
        this.setState({
            surname4: e.target.value
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
    sendElectronicRequest0(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && this.state.linkToSource !== '' && !isNaN(this.state.yearOfPublication)) {
            this.setState({
                loading: true
            });
            const ElectronicSource0 = {
                'workName': this.state.jobName,
                'yearOfPublication': this.state.yearOfPublication,
                'linkToSource': this.state.linkToSource,
                'publication': this.state.publication
            };
            console.log(ElectronicSource0);
            Server.source(ElectronicSource0).then(res => {
                this.setState({
                    data: res,
                    loading: false
                })
            });
            console.log(this.state.data);
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendElectronicRequest1(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && this.state.linkToSource !== '' && !isNaN(this.state.yearOfPublication)) {
            this.setState({
                loading: true
            });
            const ElectronicSource1 = {
                'workName': this.state.jobName,
                'yearOfPublication': this.state.yearOfPublication,
                'linkToSource': this.state.linkToSource,
                'publication': this.state.publication,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                }]
            };
            console.log(ElectronicSource1);
            Server.source(ElectronicSource1).then(res => {
                this.setState({
                    data: res,
                    loading: false
                })
            });
            console.log(this.state.data);
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendElectronicRequest2(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && this.state.linkToSource !== '' && !isNaN(this.state.yearOfPublication)) {
            this.setState({
                loading: true
            });
            const ElectronicSource2 = {
                'workName': this.state.jobName,
                'yearOfPublication': this.state.yearOfPublication,
                'linkToSource': this.state.linkToSource,
                'publication': this.state.publication,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                }
            ]
            };
            console.log(ElectronicSource2);
            Server.source(ElectronicSource2).then(res => {
                this.setState({
                    data: res,
                    loading: false
                })
            });
            console.log(this.state.data);
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendElectronicRequest3(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && this.state.linkToSource !== '' && !isNaN(this.state.yearOfPublication)) {
            this.setState({
                loading: true
            });
            const ElectronicSource3 = {
                'workName': this.state.jobName,
                'yearOfPublication': this.state.yearOfPublication,
                'linkToSource': this.state.linkToSource,
                'publication': this.state.publication,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                }
            ]
            };
            console.log(ElectronicSource3);
            Server.source(ElectronicSource3).then(res => {
                this.setState({
                    data: res,
                    loading: false
                })
            });
            console.log(this.state.data);
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    sendElectronicRequest4(e) {
        e.preventDefault();
        if (this.state.jobName !== '' && this.state.linkToSource !== '' && !isNaN(this.state.yearOfPublication)) {
            this.setState({
                loading: true
            });
            const ElectronicSource4 = {
                'workName': this.state.jobName,
                'yearOfPublication': this.state.yearOfPublication,
                'linkToSource': this.state.linkToSource,
                'publication': this.state.publication,
                'authors': [{
                    'firstName': this.state.firstName1,
                    'lastName': this.state.lastName1,
                    'fathersName': this.state.surname1
                },
                {
                    'firstName': this.state.firstName2,
                    'lastName': this.state.lastName2,
                    'fathersName': this.state.surname2
                },
                {
                    'firstName': this.state.firstName3,
                    'lastName': this.state.lastName3,
                    'fathersName': this.state.surname3
                },
                {
                    'firstName': this.state.firstName4,
                    'lastName': this.state.lastName4,
                    'fathersName': this.state.surname4
                }
            ]
            };
            console.log(ElectronicSource4);
            Server.source(ElectronicSource4).then(res => {
                this.setState({
                    data: res,
                    loading: false
                })
            });
            console.log(this.state.data);
        } else {
            alert('Некоректні дані. Спробуйте ще раз');
        }
    };
    render() {
        return (
            <div>
                <Header />
                <div className='main-div'>
                    <Tab.Container id="left-tabs" defaultActiveKey="second">
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
                                                placeholder="Обов'язкове поле"
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
                                                placeholder='Число'
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
                                                placeholder="Обов'язкове поле"
                                                value={this.state.linkToSource}
                                                onChange={this.getLinkToSource}
                                            />
                                        </InputGroup>
                                        <Tabs defaultActiveKey="one" variant="pills">
                                            <Tab eventKey="none" title="Без автора">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' readOnly />
                                                    <FormControl placeholder="Ім'я" readOnly />
                                                    <FormControl placeholder='По батькові' readOnly />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest0 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="one" title="1 автор">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest1 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="two" title="2 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest2 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="three" title="3 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest3 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="four" title="4 автори">
                                                <InputGroup className="mb-3 author-tabs-div">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName4} onChange={this.getLastName4} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName4} onChange={this.getFirstName4} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname4} onChange={this.getFathersName4} />
                                                </InputGroup>
                                                <Button variant="primary" size="lg" active block disabled={this.state.loading} onClick={!this.state.loading ? this.sendElectronicRequest4 : null}>
                                                    {this.state.loading ? 'Оформлюємо...' : 'Оформити'}
                                                </Button>
                                            </Tab>
                                            <Tab eventKey="five" title="Від 5 авторів">
                                                <Form.Text className="text-muted author-tabs-div">
                                                    Якщо документ має більше, ніж 4 автори, у списку літератури зазначаються лише перші 3 автори
                                                </Form.Text>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName1} onChange={this.getLastName1} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName1} onChange={this.getFirstName1} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname1} onChange={this.getFathersName1} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName2} onChange={this.getLastName2} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName2} onChange={this.getFirstName2} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname2} onChange={this.getFathersName2} />
                                                </InputGroup>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>ПІБ автора</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl placeholder='Прізвище' value={this.state.lastName3} onChange={this.getLastName3} />
                                                    <FormControl placeholder="Ім'я" value={this.state.firstName3} onChange={this.getFirstName3} />
                                                    <FormControl placeholder='По батькові' value={this.state.surname3} onChange={this.getFathersName3} />
                                                </InputGroup>
                                            </Tab>
                                        </Tabs>
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
                <Card className="card-div">
                    <Card.Body>{this.state.data}</Card.Body>
                </Card>
            </div>
        );
    }
};