import { Container, Row, Col } from "react-bootstrap";
import '../assets/css/about.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import heroImg1 from '../components/images/black-mountain-070-1080x600.jpg';
import heroImg2 from '../components/images/outdoor-wedding-ideas-newlyweds-happy-at-the-nature.jpg';
import heroImg3 from '../components/images/rustic-wedding-ceremony-native-roaming.jpg';
import heroImg4 from '../components/images/Trying-to-Plan-an-Outdoor-Wedding-Consider-These-Great-Tips-For-Success.jpg';

const images = [heroImg1, heroImg2, heroImg3, heroImg4,];


export default function About() {
  return (
    <>
      <div className="about">
        <div className="aboutHead">
          <h1>Cascade Mountain Ranch</h1>
          <h2>About Us</h2>
        </div>
        <p>
          Cascade Mountain Ranch is a 50-acre ranch nestled in its own private
          valley in Southern Oregon and surrounded by wilderness lands.
          Hiking/walking trails lead you throughout the ranch. The mountains
          rise on all sides, accented by Grand King Mountain Ridge to the
          east. One can hike to the Lucky Queen Mines or enjoy the view with
          pine, fir, madrone, oak and cedar trees lacing the entire panorama.
          Wild Goose Lake is home to just that—wild geese! Deer, wild turkeys,
          squirrels and, on rare occasions, elk can be seen roaming the Ranch.
          There are no dangerous animals, snakes, etc. Seasonally, the sound
          of Lucky Miner's Creek can be heard. Guests are encouraged to walk,
          hike or bike the entire 50 acres with a map of the trails with
          estimated distances. Over 30 miles of back roads are next door to
          the ranch for ATVs and motorbikes. Prior to becoming a retreat
          center in 2008, Cascade Mountain Ranch was a children's residential
          group home for 15 years. The peaceful, rural setting provided a
          great place for kids to be nurtured in a stable environment while
          learning basic skills and the strong work ethic associated with
          living in the country. After extensive renovations and upgrades the
          newly transitioned Ranch now serves as a unique wilderness location
          with guest accommodations for retreats, getaways, family reunions,
          church functions, youth groups, weddings and other special events.
          Groups and families are invited to enjoy the peaceful outdoors and
          comfortable lodges. The Ranch is run by iCare, Inc., a non-profit
          organization that helps and supports various specialized needs of
          families and children. Cascade Mountain Ranch is operated solely by
          volunteers. Please help us care for this special place.
        </p>
      </div>

      <div>
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
              <span>
                Welcome
              </span>
            </div>
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
      </div>

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
