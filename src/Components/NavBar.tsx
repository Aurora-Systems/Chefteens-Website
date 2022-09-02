import {Container, Navbar, Nav} from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import list from "../assets/img/list.png"

const TopNavbar=()=>{
    return(
            <Navbar collapseOnSelect expand="sm"  bg="light">
                <Container fluid>
                    <Navbar.Brand>
                       <b className="animate-character">CHEFTEENS</b>
                    </Navbar.Brand>
                    <Navbar.Toggle>
                        <img src={list} alt=""/>
                    </Navbar.Toggle>
                </Container>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/" className="animate-character bb">Home</Nav.Link>
                        <Nav.Link href="about" className="animate-character bb">About</Nav.Link>
                        <Nav.Link href="gallery" className="animate-character bb">Gallery</Nav.Link>
                        <Nav.Link href="contact" className="animate-character bb">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default TopNavbar;