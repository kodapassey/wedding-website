import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import beefCakes from "../components/images/vendors/beefCakes.jpg";
import beefCakesCake from "../components/images/vendors/beefCakesCake.jpg"
import theThirstyWheelLogo from "../components/images/vendors/theThirstyWheelLogo.jpg"
import theThirstyWheelSetup from "../components/images/vendors/theThirstyWheelSetup.jpg"
import { Link } from "react-router-dom";



export default function Vendors() {
  return (
    <>
      <Container>
        <h1>This is my Vendor page</h1>
      </Container>
      <Container>
        <h3>Wedding Planners</h3>
      </Container>
      <Container>
        <h3>Photographers</h3>
      </Container>
      <Container>
        <h3>Expressions</h3>
      </Container>
      <Container>
        <h3>Caterers</h3>
      </Container>
      <Container>
        <h3>Bartending Services</h3>
        <Col>
          <img className="" src={theThirstyWheelLogo} alt="logo"></img>
        </Col>
        <Col>
          <h4>The Thirsty Wheel</h4>
          <p>Jamie</p>
          <p>518-524-4457</p>
          <Link href="info@thethirstywheel.com"></Link>
          <Button href="https://www.thethirstywheel.com">
            Visit their Website
          </Button>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/thethirstywheel/"
          >
            <FontAwesomeIcon className="socials" icon={faFacebook} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/the_thirsty_wheel/"
          >
            <FontAwesomeIcon className="socials" icon={faInstagram} />
          </a>
          <Col>
          <img className="" src={theThirstyWheelSetup} alt="logo"></img>
        </Col>
        </Col>
      </Container>
      <Container>
        <h3>Officiants</h3>
      </Container>
      <Container>
        <h3>Florists</h3>
      </Container>
      <Container>
        <h3>Bakeries</h3>
        <Col>
          <img className="" src={beefCakes} alt="logo"></img>
        </Col>
        <Col>
          <h4>Beef Cakes</h4>
          <p>Alyssa Warne</p>
          <p>532 NE E Street</p>
          <p>Grants Pass, OR 97526</p>
          <Button href="https://www.beefcakesgp.com">
            Visit their Website
          </Button>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/beefcakesgp"
          >
            <FontAwesomeIcon className="socials" icon={faFacebook} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/beef_cakes_gp/"
          >
            <FontAwesomeIcon className="socials" icon={faInstagram} />
          </a>
          <Col>
          <img className="" src={beefCakesCake} alt="logo"></img>
        </Col>
        </Col>
        
        <Col></Col>
      </Container>
    </>
  );
}
