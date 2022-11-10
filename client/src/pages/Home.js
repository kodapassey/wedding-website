import heroImg1 from '../components/images/black-mountain-070-1080x600.jpg';
import heroImg2 from '../components/images/ranchWeddingImages/image9.jpg'
import heroImg3 from '../components/images/ranchWeddingImages/image12.jpg'
import '../assets/css/home.css';
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import heroVid from '../components/images/wedding website BG video.mp4';



export default function Home() {
    return (
        <>
            {/* <iframe className='video' src="https://www.youtube.com/embed/fPHvlUcjF2c?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}


            <div className='main'>
                <video autoPlay='autoplay' loop='loop' muted id="myVideo">
                    <source src={heroVid} type="video/mp4" />
                </video>
            </div>


            <div className="subHeader">
                <h2>Oregon's Premier Wedding Destination</h2>
                <p>
                    SMALL DESCRIPTION OF RANCH Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href='/contact'>
                    <button>Get in touch today!</button>
                </a>
            </div>

            <Container className='boxes'>
                <Row>
                    <Col className='box' xl={4}>
                        <a className='boxLink' href='/venue'>
                            <img className='image' src={heroImg1}></img>
                            <div className='textWrap'>
                                <h3>The Ranch</h3>
                            </div>
                        </a>
                    </Col>
                    <Col className='box' xl={4}>
                        <a className='boxLink' href='/packages'>
                            <img className='image' src={heroImg2}></img>
                            <div className='textWrap'>
                                <h3>Weddings</h3>
                            </div>
                        </a>
                    </Col>
                    <Col className='box' xl={4}>
                        <a className='boxLink' href='/gallery'>
                            <img className='image' src={heroImg3}></img>
                            <div className='textWrap'>
                                <h3>Events and reunions</h3>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}