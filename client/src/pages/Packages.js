import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/packages.css";




export default function Pricing() {
  return (
    <>
    <Container>
      <h1 className="packagesH1">Packages</h1>
      <h5>We know that each wedding is unique. If the below options don't quite fit your vision just give us a call!</h5>
    </Container>

    <Container>
        <Row className="packagesWrap">
          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h1>Elope</h1>
              <p>Access to our 50 acre grounds and covered event deck for 4 hours.</p>
              <p>Monday - Thursday, or call for last minute availability on weekends</p>
              <h4>$800</h4>
              <button>Contact Us!</button>
            </div>

            {/* <div className="bottomBox">
              <h3>What's Included</h3>
              <ul>
                <li>House Transportation</li>
                <li>Music</li>
                <li>Officiant*</li>
                <li>Photography* (50 pictures)</li>
                <li>Tables, Chairs, Dinnerware</li>
              </ul>
            </div> */}
          </Col>

          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h1>Epic Elope</h1>
              <p>Access to our 50 acre grounds and covered event deck for 4 hours, plus one night accommodations for two in our penthouse suite.</p>
              <p>Monday - Thursday, or call for last minute availability on weekends</p>
              <h4>$1300</h4>
              <button>Contact Us!</button>
            </div>

            {/* <div className="bottomBox">
              <h3>EVERYTHING FROM THE ESPECIAL PACKAGE PLUS</h3>
              <ul>
                <li>Photography* (100 Pictures)</li>
                <li>Complimantry Soft Drinks</li>
                <li>Small Flower Arrangements for tables*</li>
                <li>Photography* (50 pictures)</li>
                <li>Complimentry Fruit, Snacks and Chips</li>
              </ul>
            </div> */}
          </Col>

          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h1>Micro Wedding</h1>
              <p>Access to our 50 acre grounds and covered event deck for 6 hours. Tables and chairs included.</p>
              <p>Monday - Thursday, or call for last minute availability on weekends</p>
              <p>Guest Limit: 30</p>
              <h4>$1000</h4>
              <button>Contact Us!</button>
            </div>

            {/* <div className="bottomBox">
              <h3>EVERYTHING FROM THE EXCEPTIONAL PACKAGE PLUS</h3>
              <ul>
                <li>Photography* (150 Pictures)</li>
                <li>Wine and Soft Drinks*</li>
                <li>Medium Flower Arrangements for Tables</li>
                <li>Wedding Dinner Service</li>
                <li>Continuous fruit, snacks and chips</li>
                <li>Morning after breakfast for all guests</li>
              </ul>
            </div> */}
          </Col>

          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h1>The Perfect Day</h1>
              <p>Access to our 50 acre grounds and covered event deck for 10 hours (10pm cuttoff). Tables and chairs included.</p>
              <p>Guest limit: 200</p>
              <h4>$2000</h4>
              <button>Contact Us!</button>
            </div>

            {/* <div className="bottomBox">
              <h3>EVERYTHING FROM THE EXCLUSIVE PACKAGE PLUS</h3>
              <ul>
                <li>Photography* (200 Pictures)</li>
                <li>Beer, Wine and Soft Drinks*</li>
                <li>2 Night Stay for up to 60 guests</li>
                <li>Breakfast and Lunch provided both days</li>
                <li>Reception Dinner</li>
                <li>Wedding Cake</li>
              </ul>
            </div> */}
          </Col>

          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h1>The Perfect Weekend</h1>
              <p>Access to our 50 acre grounds and covered event deck for 10 hours (10pm cuttoff), plus overnight accommodations. Tables and chairs included.</p>
              <p>Ceremony Guest Limit: 200</p>
              <p>Overnight Guest Limit: 60</p>
              <h4>$4200</h4>
              <button>Contact Us!</button>
            </div>

            {/* <div className="bottomBox">
              <h3>EVERYTHING FROM THE EXTRAORDINARY PACKAGE PLUS</h3>
              <ul>
                <li>Photography* (300 Pictures)</li>
                <li>Large Flower Arrangements</li>
                <li>Custom Wedding Cake</li>
                <li>Celebration Trip for 2*</li>
              </ul>
            </div> */}
          </Col>

          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h1>The Weekend Dream</h1>
              <p>Access to our 50 acre grounds and covered event deck for 10 hours (10pm cuttoff), plus 2 nights accommodations. Tables and chairs included.</p>
              <p>Ceremony Guest Limit: 200</p>
              <p>Overnight Guest Limit: 60</p>
              <h4>$6400</h4>
              <button>Contact Us!</button>
            </div>

            {/* <div className="bottomBox">
              <h3>EVERYTHING FROM THE EXTRAORDINARY PACKAGE PLUS</h3>
              <ul>
                <li>Photography* (300 Pictures)</li>
                <li>Large Flower Arrangements</li>
                <li>Custom Wedding Cake</li>
                <li>Celebration Trip for 2*</li>
              </ul>
            </div> */}
          </Col>
        </Row>
  
          <Col>
            
            <h5>*Please note that in addition to the above pricing there is also a refundable security and damages deposit. </h5>
            <h5>**Alcohol is permitted with a licensed bartender, insurance rider and refundable security deposit.</h5>
          </Col>

      </Container>

    </>
  )
}