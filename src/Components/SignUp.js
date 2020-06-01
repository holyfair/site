import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './css/SignIn.css'

const SignUp = () => {
    return (
        <div class='main-div'>
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Електронна пошта</Form.Label>
                        <Form.Control type="email" placeholder="Введіть email" />
                        <Form.Text className="text-muted">
                            Ми нікому не передаємо Ваші дані.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введіть пароль" />
                        <Form.Text className="text-muted">
                            Якщо Ви вже зареєстровані натисність <a href='/signIn' style={{color:'blue'}}>ТУТ</a>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Підтвердити
                    </Button>
                </Form>
            </div>
        </div>
    );
};
export default SignUp;