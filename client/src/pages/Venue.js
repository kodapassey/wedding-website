import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/venue.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import heroImg1 from "../components/images/ranchWeddingImages/image28.webp";
import heroImg2 from "../components/images/ranchWeddingImages/image31.jpg";
import heroImg3 from "../components/images/ranchWeddingImages/image12.jpg";
import heroImg4 from "../components/images/ranchWeddingImages/image14.jpg";

import cascadeImg from "../components/images/ranchWeddingImages/image27.jpg";
import kellyImg from "../components/images/ranchWeddingImages/image29.jpg";

const images = [heroImg1, heroImg2, heroImg3, heroImg4];

export default function Venue() {
  return (
    <>
      <div>
        <h1>Venue</h1>
        <Container>
          <div>
            <Slide
              nextArrow={
                <button
                  style={{
                    background: "none",
                    border: "0px",
                    width: "30px",
                    margin: "10px",
                  }}
                >
                  <svg
                    fill="#fff"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
                  </svg>
                </button>
              }
              prevArrow={
                <button
                  style={{
                    background: "none",
                    border: "0px",
                    width: "30px",
                    margin: "10px",
                  }}
                >
                  <svg
                    fill="#fff"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
                  </svg>
                </button>
              }
            >
              <div className="each-slide-effect">
                <div
                  className="slideImg"
                  style={{ backgroundImage: `url(${images[0]})` }}
                >
                  {/* <span>
                Welcome
              </span> */}
                </div>
              </div>
              <div className="each-slide-effect">
                <div
                  className="slideImg"
                  style={{ backgroundImage: `url(${images[1]})` }}
                >
                  {/* <span>
                Welcome
              </span> */}
                </div>
              </div>
              <div className="each-slide-effect">
                <div
                  className="slideImg"
                  style={{ backgroundImage: `url(${images[2]})` }}
                >
                  {/* <span>
                Welcome
              </span> */}
                </div>
              </div>
              <div className="each-slide-effect">
                <div
                  className="slideImg"
                  style={{ backgroundImage: `url(${images[3]})` }}
                >
                  {/* <span>
                Welcome
              </span> */}
                </div>
              </div>
            </Slide>
          </div>
          <div>
            {/* HERO IMAGE GOES HERE */}

            <p>
              Cascade Mountain Ranch is a 50-acre ranch nestled in its own
              private valley in Southern Oregon and surrounded by wilderness
              lands. Hiking/walking trails lead you throughout the ranch. The
              mountains rise on all sides, accented by Grand King Mountain Ridge
              to the east. One can hike to the Lucky Queen Mines or enjoy the
              view with pine, fir, madrone, oak and cedar trees lacing the
              entire panorama.
            </p>
            <p>
              Wild Goose Lake is home to just that—wild geese! Deer, wild
              turkeys, squirrels and, on rare occasions, elk can be seen roaming
              the Ranch. There are no dangerous animals, snakes, etc.
              Seasonally, the sound of Lucky Miner's Creek can be heard. Guests
              are encouraged to walk, hike or bike the entire 50 acres with a
              map of the trails with estimated distances. Over 30 miles of back
              roads are next door to the ranch for ATVs and motorbikes. Prior to
              becoming a retreat center in 2008, Cascade Mountain Ranch was a
              children's residential group home for 15 years.
            </p>
            <p>
              The peaceful, rural setting provided a great place for kids to be
              nurtured in a stable environment while learning basic skills and
              the strong work ethic associated with living in the country. After
              extensive renovations and upgrades the newly transitioned Ranch
              now serves as a unique wilderness location with guest
              accommodations for retreats, getaways, family reunions, church
              functions, youth groups, weddings and other special events. Groups
              and families are invited to enjoy the peaceful outdoors and
              comfortable lodges.
            </p>
            <p>
              The Ranch is run by iCare, Inc., a non-profit organization that
              helps and supports various specialized needs of families and
              children. Cascade Mountain Ranch is operated solely by volunteers.
              Please help us care for this special place.
            </p>
          </div>
        </Container>
        <Container>
          {/* PICTURE OF CASCADE LODGE GOES HERE */}
          <h1>Cascade Lodge</h1>
          <Container className="boxes">
            <Row>
              <Col className="box" xl={6}>
                {/* <a className='boxLink' href='#'> */}
                <img className="image" src={cascadeImg}></img>
                <div className="textWrap">
                  
                </div>
                {/* </a> */}
              </Col>
              <Col>
                <h4>Rooms and Suites</h4>
                <p>
                  The Cascade lodge is 7200 sq/ft with an additional 4000 sq/ft
                  of deck space. The main lodge is 9 bedrooms and sleeps 21. In
                  addition there is our Panorama Suite that sleeps 5 and a
                  Bungalow with 2 bedrooms sleeping 4. The Cascade lodge can
                  sleep 30 guests comfortably.
                </p>
                <p></p>
                <h4>Lodge Activities and Features</h4>
                <p>
                  The lodge has its own kitchen fully equipped to cook and serve
                  all your guests with a family style meal. Multiple cooktops,
                  ovens and plenty of coffee makers for the morning. It is also
                  equipped with all the dishes and cutlery for your party.
                </p>
                <p>
                  Within the lodge, there is a large TV with VCR and DVD player.
                  We do have an assortment of videos but we always encourage and
                  welcome brining your own!
                </p>
                <p>
                  Amung others, there is a large wood burning fireplace, a pool
                  table, piano, a game cabinet full of board and card games, a
                  library full of books, laundry room and WiFi if you must!
                </p>
              </Col>
            </Row>
          </Container>

          {/* MAYBE AN IMAGE GALLERY OF CASCADE LODGE HERE */}
        </Container>
        <Container>
          {/* PICTURE OF KELLY LODGE GOES HERE */}
          <h1>Kelly Lodge Lodge</h1>
          <Row>
            <Col>
              <h4>Rooms and Suites</h4>
              <p>
                The Kelly Mountain Lodge with its homey atmosphere and multiple
                porches and decks, sits sweetly nestled in the trees. It can
                easily be divided into three separate stand-alone spaces, which
                allows privacy in multi family gatherings. It includes 3
                kitchens, 3 living rooms with large TV/entertainment systems, 6
                bathrooms, and a foosball table. The Lodge has a central
                ac/heating unit with the added bonus of a wood stove for that
                extra coziness on chilly winter nights. This Lodge is the
                perfect setting for your next getaway.
              </p>

              <h4>Lodge Activities and Features</h4>
              <p>
                Within the lodge, there is a large TV with VCR and DVD player.
                We do have an assortment of videos but we always encourage and
                welcome brining your own!
              </p>
              <p>
                Amung others, there is a large wood burning fireplace, a pool
                table, piano, a game cabinet full of board and card games, a
                library full of books, laundry room and WiFi if you must!
              </p>
            </Col>
            <Col className="box" xl={6}>
                {/* <a className='boxLink' href='#'> */}
                <img className="image" src={kellyImg}></img>
                <div className="textWrap">
                  
                </div>
                {/* </a> */}
              </Col>
          </Row>

          {/* MAYBE A PICTURE GALLERY TO ADD OF KELLY LODGE */}
        </Container>
      </div>
    </>
  );
}
