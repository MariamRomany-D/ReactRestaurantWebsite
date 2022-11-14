import React from "react";
import './nav.css' ;
import {Container, Navbar , Nav} from 'react-bootstrap';
import logo from './../assets/sub2.jpg';
const NavBar = () => {
    return ( 
        <Navbar  expand="lg" className="fixed-top " >
            <Container>
                <Navbar.Brand href="#Home"> <img src={logo} title='logo'  alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        <Nav id="ull" >
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#Pride">About Us</Nav.Link>
                        <Nav.Link href="#Foods">Explore Foods</Nav.Link>
                        <Nav.Link href="#Reviews">Reviews</Nav.Link>
                        <Nav.Link href="#FAQ">FAQ</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                        <Nav.Link id="num">1800 789 123</Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
     );
}
 
export default NavBar;