import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import '../../App.css'
import classes from './CustomNavbar.module.css'
import logo from '../../assets/images/items/logo_me.png'
export default function CustomNavbar() {
    return (
        <Navbar sticky="top" expand="lg" className={['bg_dark', 'c_light'].join(' ')}>
            <Container className={['d_flex_between'].join(' ')} >
                <Navbar.Brand href="#home" className={['c_primary'].join(' ')}>
                    <img
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={"justify-content-center"} id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className={['c_light', classes.nav_tab].join(' ')} href="#home">Me</Nav.Link>
                        <Nav.Link className={['c_light', classes.nav_tab].join(' ')} href="#about">About</Nav.Link>
                        <Nav.Link className={['c_light', classes.nav_tab].join(' ')} href="#services">Services</Nav.Link>
                        <Nav.Link className={['c_light', classes.nav_tab].join(' ')} href="#work">Work</Nav.Link>
                        <Nav.Link className={['c_light', classes.nav_tab].join(' ')} href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
