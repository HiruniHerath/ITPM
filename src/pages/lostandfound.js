import React from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Nav from '../components/nav'
import CountUp from 'react-countup';



export default function lostandfoundhome() {
  return (
    <div>
      <Nav></Nav>
      <img src=" https://www.ark-valley.org/wp-content/uploads/2016/05/dog-813103_1920.jpg" style={{ width: "100%", height: "490px", objectFit: "cover" }} />
      <Row style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px" }}>
        <Col><Card style={{ width: '42rem', border: "none" }}>
          <img src='https://res.cloudinary.com/hiruniherath/image/upload/v1684245412/lostdes_rshjia.png' ></img>
        </Card>
        </Col>
        <Col>
          <Card style={{ width: '42rem', backgroundColor: "#f5f5f5", height: "180px", backgroundRepeat: "no-repeat", opacity: "0.9", boxShadow: "20px 20px" }}>
            <p style={{ textAlign: "center", paddingTop: "60px", color: "#353535" }}>Lost & found category will  assist you on informing about animals both in domestic and wildlife.It is our
              responsibility to protect animals . Take a part of US !</p>
            <Row>
              <Col >
                <Button style={{ float: "right" }} variant="outline-dark" href='/domesticpost'>DOMSTIC POST VIEW</Button>
              </Col>
              <Col>
                <Button variant="outline-dark" href='/wildlifepost'>WILDLIFE POST VIEW</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <br></br>
      <div style={{ width: "100%", paddingLeft: "200px", paddingRight: "200px" }}>

        <Card style={{ height: "150px" }} >
          <Row style={{ paddingLeft: "100px", paddingRight: "100px" }}>
            <Col style={{ paddingTop: "50px" }}>
              Lost Wildlife Animals
              <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span style={{ fontSize: "32px", paddingLeft: "40px" }} ref={countUpRef} />
                  </div>
                )}
              </CountUp></Col>
            <Col style={{ paddingTop: "50px" }}>
              Lost Domestic Animals
              <CountUp start={0} end={90} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span style={{ fontSize: "32px" }} ref={countUpRef} />
                  </div>
                )}
              </CountUp></Col>
            <Col style={{ paddingTop: "50px" }}>
              Found Wildlife Animals
              <CountUp start={0} end={50} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span style={{ fontSize: "32px", paddingLeft: "40px" }} ref={countUpRef} />
                  </div>
                )}
              </CountUp></Col>
            <Col style={{ paddingTop: "50px" }}>
              Found Domestic Animals
              <CountUp start={0} end={87} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span style={{ fontSize: "32px", paddingLeft: "40px" }} ref={countUpRef} />
                  </div>
                )}
              </CountUp></Col>
          </Row>
        </Card>
        </div>
      <br></br>
      <div style={{ height: "60px", backgroundColor: "#003A1B" }}></div>
    </div>
  );
};
