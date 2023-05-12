import heroImg1 from '../components/images/ranchWeddingImages/image10.jpeg';
import heroImg2 from '../components/images/ranchWeddingImages/image9.jpeg'
import heroImg3 from '../components/images/ranchWeddingImages/image12.jpeg'
import '../assets/css/home.css';
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import heroImg from '../components/images/ranchWeddingImages/image19.jpeg'
import heroVid from '../components/images/wedding website BG video.mp4';



export default function Home() {
    return (
        <>
            {/* <iframe className='video' src="https://www.youtube.com/embed/fPHvlUcjF2c?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}


            {/* <div className='main'>
                <video autoPlay='autoplay' loop='loop' muted id="myVideo">
                    <source src={heroVid} type="video/mp4" />
                </video>
            </div> */}
            <div className='main'>
                <img src={heroImg}></img>
            </div>


            <div className="subHeader">
                <h2>Oregon's Premier Wedding Destination</h2>
                <p>
                Just outside Grants Pass, Oregon you will find the little hamlet of Hugo, where Cascade Mountain Ranch sits nestled into the foothills between Mt. Sexton and Mt. Roberts. You and your guests can enjoy these spectacular mountain views from the comfort of our two mountain lodges. Our seasonal creeks provide a serine soundtrack as they wind their way to our two lakes. Our lower lake features a wooden bridge leading to our island gazebo (coming soon 2023), while our 6,000 sq ft event deck overlooks our upper lake. Whether you are getting married, planning a family reunion, or hosting a retreat, Cascade Mountain Ranch provides the perfect setting to make your event memorable.
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