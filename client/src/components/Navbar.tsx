import { Container, Nav, Navbar as NavbarBoot } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <NavbarBoot bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <NavbarBoot.Brand as={Link} to="/">Periodic Table</NavbarBoot.Brand>
                <NavbarBoot.Toggle aria-controls="navbarBootScroll" />
                <NavbarBoot.Collapse id="navbarBootScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to="species">Species</Nav.Link>
                        <Nav.Link as={Link} to="lab">Lab</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                    </Nav>
                </NavbarBoot.Collapse>
            </Container>
        </NavbarBoot>
    )
}
