import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from "react-bootstrap";
import img from "../images/logo.png"

export default function Navh() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#FFFFFF', height: "100px" }} variant="light">
        <Container>
          <span>
            <Image style={{ width: "60px", height: "55px" }}
              src=
             {img}
              roundedCircle
            />

          </span>
          <Nav.Link style={{ color: "#353535", paddingRight: "400px", marginTop: "5px"}} href="/home">Home</Nav.Link>
          <Nav className="me-left">
            <Nav.Link style={{ color: "#353535", marginRight: "20px" }} href="/lostandFoundHome">Lost & Found</Nav.Link>
            <Nav.Link style={{ color: "#353535", marginRight: "20px" }} href="#features"> Vaccination Details</Nav.Link>
            <Nav.Link style={{ color: "#353535", marginRight: "20px" }} href="#pricing">Blog Publish</Nav.Link>
            <Nav.Link style={{ color: "#353535", marginRight: "20px"  }} href="/uploaded">User Uploads</Nav.Link>
            <Nav.Link style={{ color: "#353535", marginRight: "20px" }} href="#pricing">About Us</Nav.Link>

          </Nav>
        </Container>
      </Navbar>



    </>
  );
}

