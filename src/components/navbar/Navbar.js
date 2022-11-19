import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavbarStyle.css';

const NavbarPage = () => {
    return (

        <>
            <Navbar  className='nav-bar' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">DeBANK </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Products</Nav.Link>
                        <Nav.Link href="#pricing">Promotions</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#pricing">Help</Nav.Link>

                    </Nav>

                    <button className='loginbutton'>Connect with Phantom Wallet</button>
                </Container>
            </Navbar>
        </>

    )
}

export default NavbarPage