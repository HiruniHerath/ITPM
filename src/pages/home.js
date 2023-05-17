import React from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from '../components/nav'
import homepng from '../images/home.png'


export default function home() {
    return (
        <div>
            <Nav></Nav>
            <img src={homepng} style={{ width: "100%", height: "690px" }} />
            <Row style={{ paddingLeft: "20px", paddingRight: "20px"  , paddingTop:"20px"}}>
                <Col><h3>  <svg width="38" height="52" viewBox="0 0 55 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.7086 17.5744C42.0928 17.8459 40.9602 30.2228 42.3897 32.047C43.8191 33.8714 47.4031 37.1325 52.4605 34.5784C57.5172 32.0244 52.3941 16.1148 43.7086 17.5744Z" fill="black" />
                    <path d="M11.3015 17.5548C12.9174 17.8263 14.05 30.2032 12.6207 32.0274C11.1915 33.8518 7.60727 37.1132 2.55013 34.5589C-2.50712 32.0051 2.61613 16.0955 11.3015 17.5548Z" fill="black" />
                    <path d="M30.5838 4.75534C28.968 5.02685 27.8353 17.4035 29.2644 19.2279C30.6935 21.0522 34.1021 23.1196 39.1592 20.5657C44.2163 18.0118 39.2692 3.29591 30.5838 4.75534Z" fill="black" />
                    <path d="M24.7421 4.73579C26.3579 5.00731 27.4905 17.3841 26.0614 19.2085C24.6321 21.0326 21.2238 23.1002 16.1666 20.5463C11.1094 17.9924 16.0566 3.27648 24.7421 4.73579Z" fill="black" />
                    <path d="M27.5 23.5483C31.35 23.5605 36.5424 28.2407 38.9296 31.2436C41.3168 34.2465 46.0838 39.5965 44.9465 47.7959C44.44 51.4478 40.0631 54.5153 37.5834 54.5153C35.1037 54.5153 29.5639 53.1806 27.8251 53.1806C26.0863 53.1806 20.0674 54.9526 18.0062 54.4463C15.9449 53.94 11.3323 52.4311 10.3779 45.9018C9.4234 39.3725 14.4825 33.9792 17.3298 30.5521C22.55 24.2685 27.5 23.5483 27.5 23.5483Z" fill="black" />
                </svg>OVERVIEW</h3>
                    <p>Nowadays, the majority of animals—domestic and wild—suffer from a variety of issues, including mistreatment, abuse, and disappearance. In other situations, individuals were forced to endure suffering even for their lives. With this backdrop, protecting animals plays a major role in modern civilization.</p>
                </Col>
                <Col><h3 style={{ float: "right" }}>GOAL <svg width="38" height="52" viewBox="0 0 55 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.7086 17.5744C42.0928 17.8459 40.9602 30.2228 42.3897 32.047C43.8191 33.8714 47.4031 37.1325 52.4605 34.5784C57.5172 32.0244 52.3941 16.1148 43.7086 17.5744Z" fill="black" />
                    <path d="M11.3015 17.5548C12.9174 17.8263 14.05 30.2032 12.6207 32.0274C11.1915 33.8518 7.60727 37.1132 2.55013 34.5589C-2.50712 32.0051 2.61613 16.0955 11.3015 17.5548Z" fill="black" />
                    <path d="M30.5838 4.75534C28.968 5.02685 27.8353 17.4035 29.2644 19.2279C30.6935 21.0522 34.1021 23.1196 39.1592 20.5657C44.2163 18.0118 39.2692 3.29591 30.5838 4.75534Z" fill="black" />
                    <path d="M24.7421 4.73579C26.3579 5.00731 27.4905 17.3841 26.0614 19.2085C24.6321 21.0326 21.2238 23.1002 16.1666 20.5463C11.1094 17.9924 16.0566 3.27648 24.7421 4.73579Z" fill="black" />
                    <path d="M27.5 23.5483C31.35 23.5605 36.5424 28.2407 38.9296 31.2436C41.3168 34.2465 46.0838 39.5965 44.9465 47.7959C44.44 51.4478 40.0631 54.5153 37.5834 54.5153C35.1037 54.5153 29.5639 53.1806 27.8251 53.1806C26.0863 53.1806 20.0674 54.9526 18.0062 54.4463C15.9449 53.94 11.3323 52.4311 10.3779 45.9018C9.4234 39.3725 14.4825 33.9792 17.3298 30.5521C22.55 24.2685 27.5 23.5483 27.5 23.5483Z" fill="black" />
                </svg></h3>
                    <p style={{ float: "right" }}>Nowadays, the majority of animals—domestic and wild—suffer from a variety of issues, including mistreatment, abuse, and disappearance. In other situations, individuals were forced to endure suffering even for their lives. With this backdrop, protecting animals plays a major role in modern civilization.</p>
                </Col>
            </Row>
            <h3 style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "20px"  , paddingTop:"20px"}}>SERVICES</h3>
            <Row style={{ paddingLeft: "60px", paddingRight: "20px" , paddingBottom:"30px" }}>
                <Col>
                    <Card style={{ width: '14rem', backgroundColor: "#f5f5f5" }}>
                        <img src='https://res.cloudinary.com/hiruniherath/image/upload/v1684243038/lost_hxzldl.png' ></img>
                    </Card>
                </Col>
                <Col> <Card style={{ width: '14rem', backgroundColor: "#f5f5f5" }}>
                    <img src='https://res.cloudinary.com/hiruniherath/image/upload/v1684241912/report_onna4l.png' ></img>
                </Card></Col>
                <Col> <Card style={{ width: '14rem', backgroundColor: "#f5f5f5" }}>
                    <img src='https://res.cloudinary.com/hiruniherath/image/upload/v1684241908/blog_jm6mku.png' ></img>
                </Card></Col>
                <Col> <Card style={{ width: '14rem', backgroundColor: "#f5f5f5" }}>
                    <img src='https://res.cloudinary.com/hiruniherath/image/upload/v1684241909/program_veyk2d.png' ></img>
                </Card></Col>

            </Row>

            <br></br>
            <div style={{ height: "60px", backgroundColor: "#005E2C" }}></div>


        </div>
    );
};
