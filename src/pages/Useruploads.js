import React, { useState } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Nav from '../components/nav'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Uploaded() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Nav></Nav>

      <Col><h5 style={{ paddingLeft: "45px", paddingRight: "20px", paddingTop: "20px" }}>  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2C10.059 2 2 10.059 2 20C2 29.941 10.059 38 20 38ZM20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40Z" fill="#111111" />
        <path d="M8 31.6298C8 30.5968 8.772 29.7238 9.8 29.6098C17.515 28.7558 22.52 28.8328 30.218 29.6288C30.6024 29.6691 30.9667 29.8206 31.2665 30.0646C31.5663 30.3086 31.7885 30.6347 31.906 31.0029C32.0235 31.3711 32.0312 31.7656 31.9282 32.1382C31.8252 32.5107 31.616 32.8452 31.326 33.1008C22.241 41.0198 17.049 40.9108 8.64 33.1088C8.23 32.7288 8 32.1878 8 31.6298Z" fill="#111111" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.115 30.6228C22.478 29.8328 17.545 29.7588 9.90901 30.6038C9.65765 30.6331 9.42593 30.754 9.25821 30.9435C9.09049 31.133 8.99855 31.3777 9.00001 31.6308C9.00001 31.9168 9.11901 32.1878 9.32001 32.3758C13.488 36.2418 16.646 37.9888 19.733 37.9998C22.831 38.0108 26.159 36.2778 30.669 32.3478C30.8123 32.2203 30.9154 32.0538 30.9659 31.8688C31.0164 31.6837 31.012 31.488 30.9533 31.3054C30.8946 31.1228 30.7842 30.9612 30.6354 30.8401C30.4865 30.7191 30.3058 30.643 30.115 30.6228ZM9.69001 28.6158C17.486 27.7528 22.564 27.8308 30.322 28.6338C30.9003 28.6941 31.4485 28.9218 31.8994 29.2889C32.3503 29.656 32.6844 30.1466 32.8607 30.7007C33.0371 31.2547 33.0481 31.8482 32.8924 32.4084C32.7367 32.9686 32.421 33.4712 31.984 33.8548C27.409 37.8428 23.599 40.0148 19.727 39.9998C15.844 39.9858 12.202 37.7768 7.96101 33.8418C7.65736 33.5589 7.4153 33.2165 7.24995 32.8359C7.0846 32.4553 6.99951 32.0447 7.00001 31.6298C6.99855 30.8842 7.27221 30.1643 7.76857 29.608C8.26493 29.0516 8.94909 28.699 9.69001 28.6158Z" fill="#111111" />
        <path d="M28 16C28 18.1217 27.1571 20.1566 25.6569 21.6569C24.1566 23.1571 22.1217 24 20 24C17.8783 24 15.8434 23.1571 14.3431 21.6569C12.8429 20.1566 12 18.1217 12 16C12 13.8783 12.8429 11.8434 14.3431 10.3431C15.8434 8.84285 17.8783 8 20 8C22.1217 8 24.1566 8.84285 25.6569 10.3431C27.1571 11.8434 28 13.8783 28 16Z" fill="#111111" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 22C21.5913 22 23.1174 21.3679 24.2426 20.2426C25.3679 19.1174 26 17.5913 26 16C26 14.4087 25.3679 12.8826 24.2426 11.7574C23.1174 10.6321 21.5913 10 20 10C18.4087 10 16.8826 10.6321 15.7574 11.7574C14.6321 12.8826 14 14.4087 14 16C14 17.5913 14.6321 19.1174 15.7574 20.2426C16.8826 21.3679 18.4087 22 20 22ZM20 24C22.1217 24 24.1566 23.1571 25.6569 21.6569C27.1571 20.1566 28 18.1217 28 16C28 13.8783 27.1571 11.8434 25.6569 10.3431C24.1566 8.84285 22.1217 8 20 8C17.8783 8 15.8434 8.84285 14.3431 10.3431C12.8429 11.8434 12 13.8783 12 16C12 18.1217 12.8429 20.1566 14.3431 21.6569C15.8434 23.1571 17.8783 24 20 24Z" fill="#111111" />
      </svg>{''}User Uploads</h5>
      </Col>
      <Tabs
        defaultActiveKey="Uploaded Posts"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
        style={{ paddingLeft: "35px", paddingRight: "35px", paddingTop: "20px" }}
      >
        <br></br>
        {/* all user uploaded posts */}
        <Tab eventKey="Uploaded Posts" title="Uploaded Posts" >
          <Row xs={1} md={4} className="g-4" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/lost-animals-series-nr2-zoltan-toth.jpg" />
                  <Card.Body>
                    <Card.Text>
                      <ul>
                        <li> Last Location : Test</li>
                        <li>Breed : labrador</li>
                        <li> Date : Test</li>
                        <li> Time : Test</li>
                        <li>Contact no :071XXXXX</li>
                        <li>Status : PENDING</li>
                      </ul>
                      <Row><Col><DropdownButton title="EDIT STATUS" variant="outline-dark" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">PENDING</Dropdown.Item>
                        <Dropdown.Item eventKey="2">FOUND</Dropdown.Item>
                      </DropdownButton></Col>
                        <Col>   <Button variant="outline-dark" onClick={handleShow} >Edit Post</Button></Col></Row>
                      <br></br>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body><Form >
              <span className="error-message" style={{ color: "blue" }}></span>
              <br />
              <div >
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >last Location : </Form.Label>
                    <Form.Control type="text"
                      placeholder=" Enter last Location .." />
                  </Form.Group>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label >Date : </Form.Label>
                      <Form.Control type="text"
                      placeholder=" Enter Date .." />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label >Time  : </Form.Label>
                      <Form.Control type="text"
                        placeholder=" Enter Time .." />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Contact details : </Form.Label>
                    <Form.Control type="text"
                      placeholder=" Enter Contact details .." />
                  </Form.Group>
                </Row>
              </div>
            </Form></Modal.Body>
            <Modal.Footer>
              <div style={{ paddingLeft: "40%" }}>
                <Button type="submit" variant="outline-dark" onClick={handleClose} style={{ width: "120px" }}> Save </Button>{' '} {' '}<Button variant="outline-dark" style={{ width: "120px" }} > Clear </Button>
              </div>
            </Modal.Footer>
          </Modal>
        </Tab>
        <Tab eventKey="Uploaded Blogs" title="Uploaded Blogs">
          <h1>hh</h1>
        </Tab>
        {/* blog upload tab */}
      </Tabs>


      <br></br>


      <br></br>
      <div style={{ height: "60px", backgroundColor: "#005E2C" }}></div>


    </div>
  );
};
