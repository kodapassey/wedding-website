import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/venue.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import heroImg1 from "../components/images/ranchWeddingImages/image3.jpg";
import heroImg2 from "../components/images/ranchWeddingImages/image6.jpeg";
import heroImg3 from "../components/images/ranchWeddingImages/image1.jpg";
import heroImg4 from "../components/images/ranchWeddingImages/sunset.jpg";
import heroImg5 from "../components/images/ranchWeddingImages/image10.jpeg";
import heroImg6 from "../components/images/ranchWeddingImages/image36.jpg";
import heroImg7 from "../components/images/ranchWeddingImages/Kelly.jpg";
import heroImg8 from "../components/images/ranchWeddingImages/Kelly2.jpg";
import heroImg9 from "../components/images/ranchWeddingImages/lakeside2.jpg";
import heroImg10 from "../components/images/ranchWeddingImages/deckHammer.jpg";
import heroImg11 from "../components/images/ranchWeddingImages/island.jpg";

export default function Venue() {
  return (
    <>
      <h1 className="head">Venue</h1>
      <Container>
        <h2 className="subHead">Event Deck</h2>
        <Row className="venue">
          <Col className="box" xl={4}>
            {/* <a className='boxLink' href='#'> */}
            <img className="venueImg" src={heroImg7}></img>
            {/* </a> */}
          </Col>
          <Col className="box" xl={4}>
            <img className="venueImg" src={heroImg5}></img>
          </Col>
          <Col className="box" xl={4}>
            <img className="venueImg" src={heroImg6}></img>
          </Col>
          <Col className="left">
            <h5>
              Perched on the edge of the upper lake, our Event Deck boasts over
              6,000 sq ft, most of which is covered. With an on-site kitchen and
              gorgeous views, this is the perfect spot to host a reception.
            </h5>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2 className="subHead">Island Gazebo (Coming Soon 2023)</h2>
        <Row className="venue">
          <Col className="box" xl={6}>
            {/* <a className='boxLink' href='#'> */}
            <img className="venueImg" src={heroImg10}></img>
            {/* </a> */}
          </Col>
          <Col className="box" xl={6}>
            <img className="venueImg" src={heroImg11}></img>
          </Col>
          {/* <Col className="box" xl={6}>
          <img className="venueImg" src={heroImg6}></img>
          </Col> */}
          <Col className="left">
            <h5>
              Currently under construction. A short walk through the forest will
              bring you to our secluded lower lake, where our Island Gazebo
              proudly sits. This natural beauty is our premier wedding location.
            </h5>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2 className="subHead">Cascade Lodge</h2>
        <Row className="venue">
          <Col className="box" xl={12}>
            {/* <a className='boxLink' href='#'> */}
            <img className="venueImg" src={heroImg1}></img>
            {/* </a> */}
          </Col>
          {/* <Col className="box" xl={6}>
          <img className="venueImg" src={heroImg11}></img>
          </Col> */}

          <Col className="left">
            <h5>
              The Cascade is our rustic mountain lodge, perched high in the
              hills. From this vantage point you can see over the trees and bask
              in the beauty of the valley below and the mountains beyond. The
              Cascade Lodge's crowning glory is its 4,000 sq ft deck, which,
              with this picturesque backdrop, is a beautiful spot for smaller
              events. The lodge has 11 bedrooms, sleeping up to 30 guests
              comfortably, and 5 bathrooms. The upper floor is our penthouse
              suite with its own private bathroom and kitchenette. There is
              ample dining and living space where you can relax, watch movies or
              play board games in front of the fire, and the kitchen is fully
              equipt with all the cookware and dishes you need.
            </h5>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2 className="subHead">Kelly Lodge</h2>
        <Row className="venue">
          <Col className="box" xl={6}>
            {/* <a className='boxLink' href='#'> */}
            <img className="venueImg" src={heroImg7}></img>
            {/* </a> */}
          </Col>
          <Col className="box" xl={6}>
            <img className="venueImg" src={heroImg8}></img>
          </Col>
          {/* <Col className="box" xl={6}>
          <img className="venueImg" src={heroImg6}></img>
          </Col> */}
          <Col className="left">
            <h5>
            The Kelly is our bright and welcoming lodge that sits tucked up high in the tree line. The upper floor has a small balcony from which you can enjoy the breathtaking views. There are 10 bedrooms, sleeping up to 30 guests comfortably, and 6 bathrooms. The Kelly also has three kitchens and tons of dining and living space, making this the perfect location for retreats or family reunions.
            </h5>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2 className="subHead">The Grounds</h2>
        <Row className="venue">
          <Col className="box" xl={4}>
            {/* <a className='boxLink' href='#'> */}
            <img className="venueImg" src={heroImg4}></img>
            {/* </a> */}
          </Col>
          <Col className="box" xl={4}>
            <img className="venueImg" src={heroImg3}></img>
          </Col>
          <Col className="box" xl={4}>
          <img className="venueImg" src={heroImg9}></img>
          </Col>
          <Col className="left">
            <h5>
            With 50 acres we have all the natural settings you could ask for; forests, fields, creeks, lakes and mountain views. Take a stroll through our walking paths and you may come across turkeys, peacocks, deer, or even elk! If you don't get a chance to see the wildlife, you can always ask the Ranch Host for a snack to feed our llamas. 
            </h5>
          </Col>
        </Row>
      </Container>

      
       
    </>
  );
}
