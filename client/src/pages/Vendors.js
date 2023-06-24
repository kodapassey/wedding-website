import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import beefCakes from "../components/images/vendors/beefCakes.jpg";
import beefCakesCake from "../components/images/vendors/beefCakesCake.jpg"

import theThirstyWheelLogo from "../components/images/vendors/theThirstyWheelLogo.jpg"
import theThirstyWheelSetup from "../components/images/vendors/theThirstyWheelSetup.jpg"

import santePhotography from "../components/images/vendors/SANT8790-1-768x512.jpg"
import santeLogo from "../components/images/vendors/SANTE-LOGO.png"

import fourLegPhotosLogo from "../components/images/vendors/4leglogowhite2022.webp"
import fourLegPhotosCow from "../components/images/vendors/Longhorn -cow copy.jpg"

import jeffRomeLogo from "../components/images/vendors/Jef-CircleColor-01.jpg"
import jeffRomeImg from "../components/images/vendors/Fall+family-028.jpg"


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

        <Row className="vendorRow">
          <h3>Bartending Services</h3>
          <Col className="vendorCol" xl={4} md={4}>
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
        </Row>

        {/* <Container>
          <h3>Officiants</h3>
        </Container>

        <Container>
          <h3>Florists</h3>
        </Container> */}


        <Row className="vendorRow">
          <h3>Bakeries</h3>
          <Col className="vendorCol" xl={4} md={4}>
            <div className="vendorWrap">
              <div className="vendorsLogo">
                <img className="" src={beefCakes} alt="logo"></img>
              </div>
              <h4>Beef Cakes</h4>

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


        <Row className="vendorRow">
          <h3>Photographers</h3>
          <Col className="vendorCol" xl={4} md={4}>

            <div className="vendorWrap">
              <div className="vendorsLogo">
                <img className="" src={santeLogo} alt="logo"></img>
              </div>
              <h4>Sante Photography</h4>

              <a href="https://santephotography.com/">
                <button>Visit their Website</button>
              </a>

              <h5>Checkout their social medias!</h5>

              <div className="vendorSocials">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsantephotography.com%2Fexperience%2F" >
                  <FontAwesomeIcon className="socials" icon={faFacebook} />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                </a>
              </div>

              <div className="vendorsImgExp">
                <img className="" src={santePhotography} alt="logo"></img>
              </div>

            </div>
          </Col>


          <Col className="vendorCol" xl={4} md={4}>
            <div className="vendorWrap">
              <div className="vendorsLogo">
                <img className="" src={jeffRomeLogo} alt="logo"></img>
              </div>
              <h4>Photo Expressions</h4>

              <a href="https://www.photoexpressions-jrome.com/?fbclid=IwAR394Dhjezc72Y6pPEEsb1c9uXPJFlaZDMGd6p7lRyuXcvISJFwMFBWm-YY">
                <button>Visit their Website</button>
              </a>

              <h5>Checkout their social medias!</h5>

              <div className="vendorSocials">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/photoexpressionsphoto" >
                  <FontAwesomeIcon className="socials" icon={faFacebook} />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                </a>
              </div>

              <div className="vendorsImgExp">
                <img className="" src={jeffRomeImg} alt="logo"></img>
              </div>

            </div>
          </Col>

          <Col className="vendorCol" xl={4} md={4}>
            <div className="vendorWrap">
              <div className="vendorsLogo fourLegLogo">
                <img className="" src={fourLegPhotosLogo} alt="logo"></img>
              </div>
              <h4>4 Leg Photos</h4>

              <a href="https://www.4legphotos.com/?fbclid=IwAR1h2842UEHNQK7GychXKsPE7oAeD4OoyW9XXWohWR2KQQhgwXwcWIcCyOs">
                <button>Visit their Website</button>
              </a>

              <h5>Checkout their social medias!</h5>

              <div className="vendorSocials">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/4LegPhotos" >
                  <FontAwesomeIcon className="socials" icon={faFacebook} />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                </a>
              </div>

              <div className="vendorsImgExp">
                <img className="" src={fourLegPhotosCow} alt="logo"></img>
              </div>

            </div>
          </Col>
        </Row>

      </Container >

    </>
  );
}
