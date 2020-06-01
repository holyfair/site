import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Navbar.Brand>Розроблено студентами</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Допоможіть: 5168 7573 3228 5974
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default Footer;