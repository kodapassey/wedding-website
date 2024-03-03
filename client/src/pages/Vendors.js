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
import imgByDaniLogo from "../components/images/vendors/imgByDani.jpg"
import imgByDaniPic from "../components/images/vendors/imgByDaniPic.jpg"
import lostTreesLogo from "../components/images/vendors/lostInTheTreesLogo.png"
import lostTreesPic from "../components/images/vendors/lostTreesPic.jpg"
import whiteWaterLogo from "../components/images/vendors/wwBakeryLogo.png"
import whiteWaterPic from "../components/images/vendors/WWBakePic.jpeg"
import shuggaCookieLogo from "../components/images/vendors/shuggaCookieLogo.jpg"
import shuggaCookiePic from "../components/images/vendors/shuggaCookiePic.jpg"
import alphaLitLogo from "../components/images/vendors/alphaLitLogo.jpg"
import alphaLitPic from "../components/images/vendors/alphaLitPic.jpg"
import boujeePixLogo from "../components/images/vendors/boujeePixLogo.jpg"
import boujeePixPic from "../components/images/vendors/boujeePixPic.jpg"
import { Link } from "react-router-dom";
import "../assets/css/vendors.css";

export default function Vendors() {
  return (
    <>
      <h1 className="vendorsH1">Vendors</h1>

      <p className="vendorsDesc">
        We believe that every wedding is a unique celebration, and we want to ensure that your special day is everything you've dreamed of. While you have the freedom to bring your own vendors and personalize your event to reflect your style, we understand that it can sometimes be overwhelming to find the perfect team. To make your planning journey easier, we've curated a list of exceptional vendors who have a proven track record of delivering unforgettable experiences. These professionals have been carefully selected for their expertise, creativity, and commitment to making your wedding day extraordinary. Feel free to explore this list and consider them as fantastic options to help bring your vision to life.</p>

      <Container>

        <Row className="vendorRow">
          <h3>Bakeries</h3>
          <Col className="vendorCol" xl={4} md={4}>
            <div className="vendorWrap">
              <div className="vendorsLogo">
                <img className="" src={beefCakes} alt="logo"></img>
              </div>
              <h4>Beef Cakes</h4>

              <a target="_blank" rel="noreferrer" href="https://www.beefcakesgp.com">
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

          <Col className="vendorCol" xl={4} md={4}>
            <div className="vendorWrap">
              <div className="vendorsLogo">
                <img className="" src={whiteWaterLogo} alt="logo"></img>
              </div>
              <h4>Whitewater Bakery</h4>

              <a target="_blank" rel="noreferrer" href="https://whitewater-bakery.com/">
                <button>Visit their Website</button>
              </a>

              <h5>Checkout their social medias!</h5>

              <div className="vendorSocials">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100045587697076&mibextid=ZbWKwL">
                  <FontAwesomeIcon className="socials" icon={faFacebook} />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/whitewater_bakery/?igshid=YTQwZjQ0NmI0OA%3D%3D">
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                </a>
              </div>

              <div className="vendorsImgExp">
                <img className="" src={whiteWaterPic} alt="logo"></img>
              </div>

            </div>
          </Col>

          <Col className="vendorCol" xl={4} md={4}>
            <div className="vendorWrap">
              <div className="vendorsLogo">
                <img className="" src={shuggaCookieLogo} alt="logo"></img>
              </div>
              <h4>Shugga Cookie</h4>

              <a target="_blank" rel="noreferrer" href="https://www.shuggacookie.com/?fbclid=IwAR21RHult1cOMi1ugO5NfysIDxje9m4ZBYLqkT4aCHeRIkmUHEyz39hFb2E#/">
                <button>Visit their Website</button>
              </a>

              <h5>Checkout their social medias!</h5>

              <div className="vendorSocials">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/shuggacookiegp?mibextid=ZbWKwL">
                  <FontAwesomeIcon className="socials" icon={faFacebook} />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/shuggacookiegp/">
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                </a>
              </div>

              <div className="vendorsImgExp">
                <img className="" src={shuggaCookiePic} alt="logo"></img>
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

              <a target="_blank" rel="noreferrer" href="https://santephotography.com/">
                <button>Visit their Website</button>
              </a>

              <h5>Checkout their social medias!</h5>

              <div className="vendorSocials">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/santeimages" >
                  <FontAwesomeIcon className="socials" icon={faFacebook} />
                </a>

                {/* <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                </a> */}
              </div>

              <div className="vendorsImgExp">
                <img className="" src={santePhotography} alt="logo"></img>
              </div>

            </div>
          </Col>

          <Col className="vendorCol" xl={4} md={4}>
            <div className="vendorWrap">
              <div className="vendorsLogo fourLegLogo">
                <img className="" src={imgByDaniLogo} alt="logo"></img>
              </div>
              <h4>Images By Danielle</h4>

              <a target="_blank" rel="noreferrer" href="https://danielleunger.com/?fbclid=IwAR2lqk1X-DIHzkQbOs2Sh_1ouFjpfhXRvUC1Ji9uBGGWBWEb9X6TmXP_KoI">
                <button>Visit their Website</button>
              </a>

              <h5>Checkout their social medias!</h5>

              <div className="vendorSocials">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/imagesbydanielle?mibextid=ZbWKwL" >
                  <FontAwesomeIcon className="socials" icon={faFacebook} />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/imagesbydanielle/">
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                </a>
              </div>

              <div className="vendorsImgExp">
                <img className="" src={imgByDaniPic} alt="logo"></img>
              </div>

            </div>
          </Col>

          <Col className="vendorCol" xl={4} md={4}>
            <div className="vendorWrap">
              <div className="vendorsLogo">
                <img className="" src={lostTreesLogo} alt="logo"></img>
              </div>
              <h4>Lost in the Trees Media</h4>

              <a target="_blank" rel="noreferrer" href="https://www.lostinthetreesmedia.com/?fbclid=IwAR0me4hbMq8RmQ7IirbG8OqKuKf3oqch_Uzq0oft4lnP4PkWvkrjqDufbSk">
                <button>Visit their Website</button>
              </a>

              <h5>Checkout their social medias!</h5>

              <div className="vendorSocials">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/LostintheTreesMedia?mibextid=ZbWKwL" >
                  <FontAwesomeIcon className="socials" icon={faFacebook} />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/lost_in_the_trees_media/">
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                </a>
              </div>

              <div className="vendorsImgExp">
                <img className="" src={lostTreesPic} alt="logo"></img>
              </div>

            </div>
          </Col>

          <Row className="vendorRow">
            <h3>Additional Services</h3>

            

            <Col className="vendorCol" xl={4} md={4}>
              <div className="vendorWrap">
                <div className="vendorsLogo">
                  <img className="" src={theThirstyWheelLogo} alt="logo"></img>
                </div>
                <h4>The Thirsty Wheel</h4>
                {/* <p>Jamie</p> */}
                {/* <p>518-524-4457</p> */}
                <Link href="info@thethirstywheel.com"></Link>

                <a target="_blank" rel="noreferrer" href="https://www.thethirstywheel.com">
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
            <Col className="vendorCol" xl={4} md={4}>
              <div className="vendorWrap">
                <div className="vendorsLogo">
                  <img className="" src={alphaLitLogo} alt="logo"></img>
                </div>
                <h4>Alpha-Lit Medford</h4>
                {/* <p>Jamie</p> */}
                {/* <p>518-524-4457</p> */}
                <Link href="info@thethirstywheel.com"></Link>

                <a target="_blank" rel="noreferrer" href="https://www.alphalitletters.com/?fbclid=IwAR0m7Oi9LqomtDfIVNL2lIGFHda9COK47E66kqw8YSzxbhxgjoE3rOXudTQ">
                  <button>Visit their Website</button>
                </a>

                <h5>Checkout their social medias!</h5>

                <div className="vendorSocials">
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/alphalitmedford?mibextid=ZbWKwL" >
                    <FontAwesomeIcon className="socials" icon={faFacebook} />
                  </a>

                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/alphalitdallas/">
                    <FontAwesomeIcon className="socials" icon={faInstagram} />
                  </a>
                </div>

                <div className="vendorsImgExp">
                  <img className="" src={alphaLitPic} alt="logo"></img>
                </div>

              </div>
            </Col>

            <Col className="vendorCol" xl={4} md={4}>
              <div className="vendorWrap">
                <div className="vendorsLogo">
                  <img className="" src={boujeePixLogo} alt="logo"></img>
                </div>
                <h4>Boujee Pix Photo Booth Co.</h4>
                {/* <p>Jamie</p> */}
                {/* <p>518-524-4457</p> */}
                <Link href="info@thethirstywheel.com"></Link>

                <a target="_blank" rel="noreferrer" href="https://www.southernoregonlitevents.com/?fbclid=IwAR2Kj-ScJnU48d3tAfhjlpWygUXdkEBnTyCk4r4AttvieuM-UD9u7xyd2Nw">
                  <button>Visit their Website</button>
                </a>

                <h5>Checkout their social medias!</h5>

                <div className="vendorSocials">
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/boujeepix" >
                    <FontAwesomeIcon className="socials" icon={faFacebook} />
                  </a>

                  <a target="_blank" rel="noreferrer" href=" https://www.instagram.com/boujeepix_photobooth/">
                    <FontAwesomeIcon className="socials" icon={faInstagram} />
                  </a>
                </div>

                <div className="vendorsImgExp">
                  <img className="" src={boujeePixPic} alt="logo"></img>
                </div>

              </div>
            </Col>
          </Row>

        </Row>

      </Container >

    </>
  );
}
