import React, {Component} from 'react'
import { Form, Button } from 'react-bootstrap'
import './css/SignIn.css'
import axios from "axios"
const API_URL = "https://localhost:5001";

export default class SignIn extends Component{
    constructor(props){
        super(props);
        this.sendRequest = this.sendRequest.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);

        this.state={
            email:'',
            password:''
        };
    }
    getEmail(e){
        this.setState({
            email: e.target.value
          });
    }
    getPassword(e){
        this.setState({
            password: e.target.value
        });
    }
    sendRequest(e){
    // axios
    //   .post(API_URL + "/token", {
    //     email: "masha@gmail.com",
    //     password: "111111"
    //   })
    //   .then(response => {
    //     console.log(response.accessToken)
    //     if (response.data.accessToken) {
    //       localStorage.setItem("user", JSON.stringify(response.data));
    //     }

    //     return response.data;
    //   });
    }
    render(){
        return(
            <div class='signIn-main-div'>
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Електронна пошта</Form.Label>
                        <Form.Control type="email" placeholder="Введіть email" value={this.state.email} onChange={this.getEmail}/>
                        <Form.Text className="text-muted">
                            Ми нікому не передаємо Ваші дані.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введіть пароль" value={this.state.password} onChange={this.getPassword}/>
                        <Form.Text className="text-muted">
                            Якщо Ви не зареєстровані натисність <a href='/signUp' style={{color:'blue'}}>ТУТ</a>
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