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
import "../assets/css/vendors.css";



export default function Vendors() {
  return (
    <>
      <h1 className="vendorsH1">Vendors</h1>

      <p className="vendorsDesc">
        We believe that every wedding is a unique celebration, and we want to ensure that your special day is everything you've dreamed of. While you have the freedom to bring your own vendors and personalize your event to reflect your style, we understand that it can sometimes be overwhelming to find the perfect team. To make your planning journey easier, we've curated a list of exceptional vendors who have a proven track record of delivering unforgettable experiences. These professionals have been carefully selected for their expertise, creativity, and commitment to making your wedding day extraordinary. Feel free to explore this list and consider them as fantastic options to help bring your vision to life.</p>
      {/* <Container>
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
      </Container> */}


      <Container>
        <Row>

          <Col className="vendorCol" xl={4} md={4}>
            <h3>Bartending Service</h3>
            <div className="vendorWrap">
              <div className="vendorsLogo">
                <img className="" src={theThirstyWheelLogo} alt="logo"></img>
              </div>
              <h4>The Thirsty Wheel</h4>
              {/* <p>Jamie</p> */}
              {/* <p>518-524-4457</p> */}
              <Link href="info@thethirstywheel.com"></Link>

              <a href="https://www.thethirstywheel.com">
                <button>Visit their Website</button>
              </a>

              <h5>Checkout their social medias!</h5>

              <div className="vendorSocials">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/thethirstywheel/" >
                  <FontAwesomeIcon className="socials" icon={faFacebook} />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/the_thirsty_wheel/">
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                </a>
              </div>

              <div className="vendorsImgExp">
                <img className="" src={theThirstyWheelSetup} alt="logo"></img>
              </div>

            </div>
          </Col>

          {/* <Container>
          <h3>Officiants</h3>
        </Container>

        <Container>
          <h3>Florists</h3>
        </Container> */}

          <Col className="vendorCol" xl={4} md={4}>
            <h3>Bakery</h3>
            <div className="vendorWrap">
              <div className="vendorsLogo">
                <img className="" src={beefCakes} alt="logo"></img>
              </div>
              <h4>Beef Cakes</h4>
              {/* <p>Alyssa Warne</p> */}
              {/* <p>532 NE E Street</p>
            <p>Grants Pass, OR 97526</p> */}

              <a href="https://www.beefcakesgp.com">
                <button>Visit their Website</button>
              </a>

              <h5>Checkout their social medias!</h5>

              <div className="vendorSocials">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/beefcakesgp">
                  <FontAwesomeIcon className="socials" icon={faFacebook} />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/beef_cakes_gp/">
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                </a>
              </div>

              <div className="vendorsImgExp">
                <img className="" src={beefCakesCake} alt="logo"></img>
              </div>

            </div>
          </Col>

        </Row>
      </Container >

    </>
  );
}
