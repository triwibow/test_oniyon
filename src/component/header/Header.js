import { Icon } from "@iconify/react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <>
            <div className="container-fluid" style={{backgroundColor:"#a5e6fa"}}>
                <Container>
                    <div className="row">
                        <div className="col-md-12 d-flex align-items-center justify-content-between py-3">
                            <span>Dedicated to your smile</span>
                            <div className="d-flex align-items-center justify-content-between">
                                <Icon className="me-4" icon="akar-icons:instagram-fill" />
                                <NavDropdown title="Eng" id="collasible-lang">
                                    <NavDropdown.Item href="#action/3.1">Eng</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Indonesia
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Navbar className="p-4" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Opal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">About Us</Nav.Link>
                            <NavDropdown title="Treatments" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#features">Dentiest Schedule</Nav.Link>
                            <Nav.Link href="#features">Blog</Nav.Link>
                            <Nav.Link href="#features">Promo</Nav.Link>
                            <Nav.Link href="#features">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;