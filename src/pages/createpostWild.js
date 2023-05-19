import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'
import axios from "axios";
import FileBase from "react-file-base64";


export default function CreatepostWild() {
    const [last_location, setlast_location] = useState(" ");
    const [breed, setbreed] = useState(" ");
    const [date, setdate] = useState(" ");
    const [time, settime] = useState(" ");
    const [image, setimage] = useState(" ");


    const createAt = "now";

    function sendData(e) {
        e.preventDefault();
        const newProducr = {

            last_location,
            breed,
            date,
            time,
            image,
            createAt: "now"
        }
        axios.post("http://localhost:5000/api/wildlife/create", newProducr).then(() => {
            ("animal added")
            setlast_location('');
            setbreed('');
            setdate('');
            settime('');
            setimage('');
            alert("Animal details added successfully ..");
            window.location = '/wildlifepost'

        }).catch((err) => {
            alert("error" + err);
        })
    }

    function clearpage() {
        window.location.reload();
    }

    return (
        <div>
            <Nav></Nav>
            <Row>

                <h5 style={{ paddingLeft: "13vh", paddingTop: "4vh" }}>
                    <svg width="38" height="52" viewBox="0 0 55 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43.7086 17.5744C42.0928 17.8459 40.9602 30.2228 42.3897 32.047C43.8191 33.8714 47.4031 37.1325 52.4605 34.5784C57.5172 32.0244 52.3941 16.1148 43.7086 17.5744Z" fill="black" />
                        <path d="M11.3015 17.5548C12.9174 17.8263 14.05 30.2032 12.6207 32.0274C11.1915 33.8518 7.60727 37.1132 2.55013 34.5589C-2.50712 32.0051 2.61613 16.0955 11.3015 17.5548Z" fill="black" />
                        <path d="M30.5838 4.75534C28.968 5.02685 27.8353 17.4035 29.2644 19.2279C30.6935 21.0522 34.1021 23.1196 39.1592 20.5657C44.2163 18.0118 39.2692 3.29591 30.5838 4.75534Z" fill="black" />
                        <path d="M24.7421 4.73579C26.3579 5.00731 27.4905 17.3841 26.0614 19.2085C24.6321 21.0326 21.2238 23.1002 16.1666 20.5463C11.1094 17.9924 16.0566 3.27648 24.7421 4.73579Z" fill="black" />
                        <path d="M27.5 23.5483C31.35 23.5605 36.5424 28.2407 38.9296 31.2436C41.3168 34.2465 46.0838 39.5965 44.9465 47.7959C44.44 51.4478 40.0631 54.5153 37.5834 54.5153C35.1037 54.5153 29.5639 53.1806 27.8251 53.1806C26.0863 53.1806 20.0674 54.9526 18.0062 54.4463C15.9449 53.94 11.3323 52.4311 10.3779 45.9018C9.4234 39.3725 14.4825 33.9792 17.3298 30.5521C22.55 24.2685 27.5 23.5483 27.5 23.5483Z" fill="black" />
                    </svg> &nbsp;
                    Create a Lost or found Wild Animal </h5>

                <Col span={14} xs={7}>

                    <div style={{ paddingBottom: '4vh', paddingTop: "6vh", paddingLeft: "7vh" }}>
                        <Card border="2px" style={{ width: '45rem', borderColor: '#005E2C' }}>
                            <Card.Body>
                                <Form onSubmit={sendData} >
                                    <span className="error-message" style={{ color: "blue" }}></span>

                                    <br />
                                    <div >

                                        <Row >


                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label >last Location : </Form.Label>
                                                <Form.Control type="text"
                                                    onChange={(e) => setlast_location(e.target.value)}


                                                    placeholder=" Enter last Location .." />
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label >Date : </Form.Label>
                                                    <Form.Control type="date"
                                                        onChange={(e) => setdate(e.target.value)}

                                                        placeholder=" Enter Date .." />
                                                </Form.Group>
                                            </Col>

                                            <Col>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label >Time  : </Form.Label>
                                                    <Form.Control type="text"
                                                        onChange={(e) => settime(e.target.value)}

                                                        placeholder=" Enter Time .." />
                                                </Form.Group>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label >Breed : </Form.Label>
                                                    <Form.Control type="text"
                                                        onChange={(e) => setbreed(e.target.value)}

                                                        placeholder=" Enter  Breed .." />
                                                </Form.Group>
                                            </Col>



                                        </Row>
                                        <Row>

                                            <Form.Group controlId="fileupload">
                                                <Form.Label>Image</Form.Label>
                                                <FileBase
                                                    type="file"
                                                    multiple={false}
                                                    onDone={({ base64 }) => {
                                                        setimage(base64);
                                                    }}
                                                />
                                                <h6>**Please do not exceed the amount of file size 25MB </h6>

                                            </Form.Group>
                                        </Row>


                                    </div>

                                    <div style={{ paddingLeft: "40%" }}>
                                        <Button type="submit" variant="outline-dark" style={{ width: "120px" }}> Save </Button>{' '} {' '}<Button variant="outline-dark" onClick={clearpage} style={{ width: "120px" }} > Clear </Button>

                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>



                </Col>
                <Col>
                    <div style={{ paddingTop: '5vh', paddingBottom: '1vh', paddingRight: "2vh" }}>

                        <div>
                            <Card style={{ width: '498px', float: "left", height: "607px", border: "none" }}>


                                <img style={{ width: '550px', height: "520px", paddingRight: "20px" }} src='https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/lost-animals-series-nr2-zoltan-toth.jpg'></img>

                            </Card>
                        </div>
                        <br></br>


                    </div></Col>

            </Row>
            <br></br>
            <div style={{ height: "60px", backgroundColor: "#003A1B" }}></div>
        </div>
    );
};
