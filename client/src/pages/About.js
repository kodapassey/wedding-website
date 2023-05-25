import { Container, Row, Col } from "react-bootstrap";
import '../assets/css/about.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import heroImg1 from '../components/images/ranchWeddingImages/image1.jpg';
import heroImg2 from '../components/images/ranchWeddingImages/image17.jpeg';
import heroImg3 from '../components/images/ranchWeddingImages/sunset.jpg';
import heroImg4 from '../components/images/ranchWeddingImages/lakeside1.jpg';
import heroImg5 from '../components/images/ranchWeddingImages/lakeside2.jpg'
import Button from 'react-bootstrap/Button'

const images = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5,];


export default function About() {
  return (
    <>
      <div className="about">
        <div className="aboutHead">
          <h1>Cascade Mountain Ranch</h1>
          <h2>About Us</h2>
        </div>
        <p>
          Cascade Mountain Ranch offers the perfect setting for your next big event. Our private 50 acre ranch includes both open valley and mountain foothills, perfect for showing off the best nature has to offer. The Ranch is surrounded by rich forest land that serves as home to an array of wildlife. Seasonal creeks run through the property into our two lakes where you will find fish, ducks and geese. Our upper lake event deck features an on site kitchen, perfect for receptions, while our island gazebo is situated on our secluded lower lake. You can enjoy all of this natural beauty from the comfort of our two cozy mountain lodges, which each sleep up to 30 guests and provide picturesque mountain views.
        </p>


        <p className="aboutMiddleDesc">
          Our rustic grounds, event deck and island gazebo make Cascade Mountain Ranch the perfect location for your wedding, reunion or retreat.
        </p>

        <div className="aboutPageContactDiv">
          <p>
            Contact us to schedule a tour!
          </p>
          <a href="/contact">
            <button className="contactBtn">Contact Us!</button>
          </a>
          <p>
            We look forward to serving you
          </p>
        </div>

      </div>

      {/* <div className="aboutImg">
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
            <div className='slideImg' style={{ 'backgroundImage': `url(${images[0]})` }}>

            </div>
          </div>
          <div className="each-slide-effect">
            <div className='slideImg' style={{ 'backgroundImage': `url(${images[1]})` }}>

            </div>
          </div>
          <div className="each-slide-effect">
            <div className='slideImg' style={{ 'backgroundImage': `url(${images[2]})` }}>

            </div>
          </div>
          <div className="each-slide-effect">
            <div className='slideImg' style={{ 'backgroundImage': `url(${images[3]})` }}>

            </div>
            <div className="each-slide-effect">
              <div className='slideImg' style={{ 'backgroundImage': `url(${images[4]})` }}
              >
              </div>
            </div>
          </div>
        </Slide>
      </div> */}

      <div>
        <Container>
          <Row>
            <h1 className="directionsh1">Directions</h1>
            <Col className="directions" xl={6}>
              <h4>Coming from NORTH:</h4>
              <p>Head south on I-5.</p>
              <p>Take exit 66 toward Hugo. Go .3 mi.</p>
              <p>Turn LEFT onto Monument Dr. Go for .3 mi.</p>
              <p>Turn RIGHT onto Jump-Off Joe Creek Rd. Go 1.9 mi.</p>
              <p>Then your destination will be on your LEFT.</p>
            </Col>
            <Col className="directions" xl={6}>
              <h4>Coming from SOUTH:</h4>
              <p>Head North on I-5.</p>
              <p>Take exit 66 toward Hugo. Go .3 mi.</p>
              <p>Turn LEFT onto Monument Dr. Go for .3 mi.</p>
              <p>Turn RIGHT onto Jump-Off Joe Creek Rd. Go 1.9 mi.</p>
              <p>Then your destination will be on your LEFT.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <iframe
            className="map"
            title="myMap"
            src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.9820332572726!2d-123.33890028446842!3d42.576903829372306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c59e2df6da1719%3A0xca312100026e0002!2s2500%20Jumpoff%20Joe%20Creek%20Rd%2C%20Grants%20Pass%2C%20OR%2097526!5e0!3m2!1sen!2sus!4v1667513044396!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </div>
      <div>
        <footer></footer>
      </div>
    </>
  );
}
