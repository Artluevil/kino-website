import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

export default function Header(props) {
    return (
        <div>
            <Navbar collapseOnSelecgitt expand="md" className="nav-bg" variant="dark">
                <Navbar.Brand href="/">CinemaDGLOL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className="ml-4" href="/Offers">Offers</Nav.Link>
                    <p onClick={props.onHandleEventClick} className="btn-events ml-4 mt-2" href="/">Events</p>
                    <Nav.Link className="ml-4" href="/News">News</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link className="mr-4" href="#deets">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
