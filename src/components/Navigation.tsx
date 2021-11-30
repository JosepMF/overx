import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth';
import routers from '../helpers/routers'

export default function Navigation() {
    const tools: any = useAuth();

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand as={NavLink} to={routers.indexPage}>OverX</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ marginRight: "auto" }}>
                        <Nav.Link as={NavLink} to={routers.aboutPage}>About</Nav.Link>
                        {tools.logged && tools?.user?.role === "admin" ? <NavDropdown title="admin" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to={routers.userPage}>users</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to={routers.uploadPage}>uploads</NavDropdown.Item>
                        </NavDropdown> : ''}
                    </Nav>
                    <Nav>
                        {tools.logged ? <>
                            <Nav.Link as={NavLink} to={routers.accountPage}>account</Nav.Link>
                            <Nav.Link className="text-danger" onClick={() => tools.logout()}>Log out</Nav.Link>
                        </> 
                            :
                        <>
                            <Nav.Link as={NavLink} to={routers.singInPage}>SingIn</Nav.Link>
                            <Nav.Link as={NavLink} to={routers.singUpPage}>SingUp</Nav.Link>
                        </>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
