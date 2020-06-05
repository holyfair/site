import React from 'react'
import HistoryAPI from '../api'
import { Card } from 'react-bootstrap'
import './css/History.css'

const History = () => (
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
);
export default History;