import React, { Component } from 'react'
import './css/History.css'
import { Card} from 'react-bootstrap'
import HeaderForAuth from './HeaderForAuth'
import Server from '../Services/Server'

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ""
        };
    }
    componentDidMount() {
        Server.getHistory(localStorage.getItem('user'), localStorage.getItem('email')).then(res => {
            this.setState({
                items: res
            });
        })
    }

    render() {
        return (<div>
            <HeaderForAuth />
            <div>{
                
                this.state.items
                    ? this.state.items.map((item) =>
                        <Card className="card-div">
                            <Card.Body>{item.content}</Card.Body>
                        </Card>
                    )
                    : 'Відправляємо голуба. Зачекайте...'
            }</div>
        </div>);
    }
}