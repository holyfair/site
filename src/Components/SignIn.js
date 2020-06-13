import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './css/SignIn.css'
import JwtAuth from '../Services/JwtAuth'
import { Link, Redirect } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import './css/Header.css'


export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.sendRequest = this.sendRequest.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);

        this.state = {
            email: '',
            password: '',
        };
    }
    getEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    getPassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    sendRequest(e) {
        e.preventDefault();
        const userData = {
            "email": this.state.email,
            "password": this.state.password
        };
        JwtAuth.signIn(userData);
        this.setState({ "email": '', "password": '' })
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" sticky="top" expand='lg'>
                    <Navbar.Brand href="#home">VakSight</Navbar.Brand>
                    <Nav className="ml-auto">
                        <NavLink><Link to='/'>Оформлення</Link></NavLink>
                        <NavLink><Link to='/signIn' >Вхід</Link></NavLink>
                        <NavLink><Link to='/signUp' >Реєстрація</Link></NavLink>
                    </Nav>
                </Navbar>
                <div class='signIn-main-div'>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Електронна пошта</Form.Label>
                            <Form.Control type="email" placeholder="Введіть email" value={this.state.email} onChange={this.getEmail} />
                            <Form.Text className="text-muted">
                                Ми нікому не передаємо Ваші дані.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="Введіть пароль" value={this.state.password} onChange={this.getPassword} />
                            <Form.Text className="text-muted">
                                Якщо Ви не зареєстровані натисність <a href='/signUp' style={{ color: 'blue' }}>ТУТ</a>
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.sendRequest}>
                            Підтвердити
                    </Button>
                    </Form>
                </div>
            </div>
        );
    };
}
