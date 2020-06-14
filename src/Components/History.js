import React from 'react'
import HistoryAPI from '../api'
import './css/History.css'
import { Card } from 'react-bootstrap'
import HeaderForAuth from './HeaderForAuth'

const History = () => (
    <div>
        <HeaderForAuth />
        <div className='history-main'>
            <ul>
                {HistoryAPI.all().map(p =>
                    (
                        <div className='history-div'>
                            <Card bg='light'>
                                <Card.Body>{p.name}</Card.Body>
                            </Card>
                        </div>
                    ))}
            </ul>
        </div>
    </div>
);
export default History;