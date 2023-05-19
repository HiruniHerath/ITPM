import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from "react-bootstrap";
import img from "../images/logo.png"

export default function Navh() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#003A1B', height: "100px" }} variant="light">
        <Container>
          <span>
            <Image style={{ width: "60px", height: "55px" }}
              src='https://th.bing.com/th/id/R.3ea668b18a40de2e318a90c5717850b4?rik=ITa5ufoKDqr%2fjQ&pid=ImgRaw&r=0'
             
              roundedCircle
            />

          </span>
          <Nav.Link style={{ color: "#f5f5f5 !important" , paddingRight: "900px", marginTop: "5px"}} href="/home">Home</Nav.Link>
          <Nav className="me-left">
            <Nav.Link style={{ color: "#f5f5f5 !important" , marginRight: "20px" }} href="/lostandFoundHome">Lost & Found</Nav.Link>
            
            <Nav.Link style={{ color: "#f5f5f5 !important", marginRight: "20px" }} href="#pricing">About Us</Nav.Link>

          </Nav>
        </Container>
      </Navbar>



    </>
  );
}

