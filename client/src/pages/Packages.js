import React from "react";
import {
  MDBContainer,
  MDBBtnGroup,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBTypography,
  MDBIcon,
  MDBCardTitle,
} from "mdb-react-ui-kit";


import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (


    <>

      <div className="packagesHeader">
        <h1>Packages</h1>
        <p>Below are some of our more popular packages, however, as wedding are very special and unique, we want to ensure that every wedding is special per the wedding party. We want to make sure it is excatly to the specs of the marriage party. If you do not see a package that is perfect for you, please reach out. We are happy to accomodate most requests. </p>
      </div>

      <Container>
        <Row className="packagesWrap">
          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h2>Especial</h2>
              <h3>The Wedding Essential</h3>
              <h4>$11,080</h4>
              <button>Contact Us!</button>
            </div>

            <div className="bottomBox">
              <h3>What's Included</h3>
              <ul>
                <li>House Transportation</li>
                <li>Music</li>
                <li>Officiant*</li>
                <li>Photography* (50 pictures)</li>
                <li>Tables, Chairs, Dinnerware</li>
              </ul>
            </div>
          </Col>

          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h2>Exceptional</h2>
              <h3>A Rustic favorite</h3>
              <h4>$13,850</h4>
              <button>Contact Us!</button>
            </div>

            <div className="bottomBox">
              <h3>EVERYTHING FROM THE ESPECIAL PACKAGE PLUS</h3>
              <ul>
                <li>Photography* (100 Pictures)</li>
                <li>Complimantry Soft Drinks</li>
                <li>Small Flower Arrangements for tables*</li>
                <li>Photography* (50 pictures)</li>
                <li>Complimentry Fruit, Snacks and Chips</li>
              </ul>
            </div>
          </Col>

          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h2>Exclusive</h2>
              <h3>A Night to Remember</h3>
              <h4>$16,910</h4>
              <button>Contact Us!</button>
            </div>

            <div className="bottomBox">
              <h3>EVERYTHING FROM THE EXCEPTIONAL PACKAGE PLUS</h3>
              <ul>
                <li>Photography* (150 Pictures)</li>
                <li>Wine and Soft Drinks*</li>
                <li>Medium Flower Arrangements for Tables</li>
                <li>Wedding Dinner Service</li>
                <li>Continuous fruit, snacks and chips</li>
                <li>Morning after breakfast for all guests</li>
              </ul>
            </div>
          </Col>

          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h2>Extraordinary</h2>
              <h3>Mountain Retreat</h3>
              <h4>$20,265</h4>
              <button>Contact Us!</button>
            </div>

            <div className="bottomBox">
              <h3>EVERYTHING FROM THE EXCLUSIVE PACKAGE PLUS</h3>
              <ul>
                <li>Photography* (200 Pictures)</li>
                <li>Beer, Wine and Soft Drinks*</li>
                <li>2 Night Stay for up to 60 guests</li>
                <li>Breakfast and Lunch provided both days</li>
                <li>Reception Dinner</li>
                <li>Wedding Cake</li>
              </ul>
            </div>
          </Col>

          <Col className="fullBox" xl={3}>
            <div className="topBox">
              <h2>Elite</h2>
              <h3>A Weekend in Paradise</h3>
              <h4>$22,050</h4>
              <button>Contact Us!</button>
            </div>

            <div className="bottomBox">
              <h3>EVERYTHING FROM THE EXTRAORDINARY PACKAGE PLUS</h3>
              <ul>
                <li>Photography* (300 Pictures)</li>
                <li>Large Flower Arrangements</li>
                <li>Custom Wedding Cake</li>
                <li>Celebration Trip for 2*</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>


      <div className="disclosures">
        <h4>Disclosures</h4>
        <p>*Officiant: You are welcome to provide your own officiant. If you would like us to take care of this, we will provide an Officaint at no charge!
        </p>
        <p>**Photography: The pictures that are included with the package, are editated photos. These will be professionally edited by the photographer. Also, if you would like to hire your own photographer, you are more than welcome. We can either still provide a photographer for the package pictures or discount package to reflect no pictures provided from us. </p>
        <p>***Alcohol: Due to state regulations, a bar tender is required to be provided for all alcoholic beverages. All alcoholic beverages must be served by a regulated bartender</p>
        <p>****Celebration trip: After the ceremony and following day, a comlimentry flight to Los Angeles, Las Vegas or Oregon Beaches. Included in this trip are, round trip tickets for 2, 2 night accomodations and entrance tickets to event of choice provided by Cascade Mountain Ranch.</p>
      </div>

    </>
  );
}