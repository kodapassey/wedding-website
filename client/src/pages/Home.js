import heroImg1 from '../components/images/black-mountain-070-1080x600.jpg';
import heroImg2 from '../components/images/outdoor-wedding-ideas-newlyweds-happy-at-the-nature.jpg';
import heroImg3 from '../components/images/rustic-wedding-ceremony-native-roaming.jpg';
import heroImg4 from '../components/images/Trying-to-Plan-an-Outdoor-Wedding-Consider-These-Great-Tips-For-Success.jpg';
import '../assets/css/home.css';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Container, Row, Col } from "react-bootstrap";



const images = [heroImg1, heroImg2, heroImg3, heroImg4,];


export default function Home() {
    return (
        <>
            <Slide nextArrow={<button style={{
                background: 'none',
                border: '0px',
                width: '30px',
                margin: '10px'
            }}><svg fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>} prevArrow={<button style={{
                background: 'none',
                border: '0px',
                width: '30px',
                margin: '10px'
            }}><svg fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>}>
                <div className="each-slide-effect">
                <iframe width="1300" height="650" src="https://www.youtube.com/embed/fPHvlUcjF2c?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="each-slide-effect">
                    <div className='slideImg' style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <span>
                            Welcome
                        </span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className='slideImg' style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <span>
                            Welcome
                        </span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className='slideImg' style={{ 'backgroundImage': `url(${images[3]})` }}>
                        <span>
                            Welcome
                        </span>
                    </div>
                </div>
            </Slide>


            <div className="subHeader">
                <h2>Oregon's Premier Wedding Destination</h2>
                <p>
                    SMALL DESCRIPTION OF RANCH Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div>
                    <button>Get in touch today!</button>
                </div>
            </div>

            <Container className='boxes'>
                <Row>
                    <Col xl={4}>
                        <img className='image' src={heroImg1}></img>
                        <div className='textWrap'>
                            <h3>The Ranch</h3>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <img className='image' src={heroImg1}></img>
                        <div className='textWrap'>
                            <h3>Weddings</h3>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <img className='image' src={heroImg1}></img>
                        <div className='textWrap'>
                            <h3>Events and reunions</h3>
                        </div>
                    </Col>
                    {/* <Col xl={3}>
                        <img className='image' src={heroImg1}></img>
                        <div className='textWrap'>
                            <h3>The Ranch</h3>
                        </div>
                    </Col> */}

                </Row>
            </Container>


            {/* <div className="wrap">
                <h3>
                    The Ranch
                </h3>
                <div className="container">
                    <div className="image">
                        <img src={heroImg1}></img>
                    </div>
                    <div className="text">
                        <p>Cascade Mountain lodge and Kelly Mountain lodge 50 acres of woods, mountains and lakes.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

            <div className="wrap">
                <h3>
                    Weddings
                </h3>
                <div className="container">
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="image">
                        <img src={heroImg1}></img>
                    </div>
                </div>
            </div>

            <div className="wrap">
                <h3>
                    Events and reunions
                </h3>
                <div className="container">
                    <div className="image">
                        <img src={heroImg1}></img>
                    </div>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

            <div className="wrap">
                <h3>
                    In Closing.....
                </h3>
                <div className="container">
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="image">
                        <img src={heroImg1}></img>
                    </div>
                </div>
            </div> */}
        </>
    )
}