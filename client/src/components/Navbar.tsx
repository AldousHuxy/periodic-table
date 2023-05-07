import { Button, Container, Form, Nav, NavDropdown, Navbar as NavbarBoot } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <NavbarBoot bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <NavbarBoot.Brand as={Link} to="/">Periodic Table</NavbarBoot.Brand>
                <NavbarBoot.Toggle aria-controls="navbarBootScroll" />
                <NavbarBoot.Collapse id="navbarBootScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <NavDropdown title="Database" id="navbarBootDropdown">
                        <NavDropdown.Item as={Link} to="/molecules">Molecules</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/isotopes">Isotopes</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/ions">Ions</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/species">All Species</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="lab">Lab</Nav.Link>
                    <Nav.Link as={Link} to="about">About</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-warning">Search</Button>
                </Form>
                </NavbarBoot.Collapse>
            </Container>
        </NavbarBoot>
    )
}
