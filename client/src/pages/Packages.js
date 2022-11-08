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

export default function App() {
  return (
    <MDBContainer className="py-5 ">
      <div className="text-center">
        <h1 classaName="mb-4">
          <strong>Packages</strong>
        </h1>
        <p>Below are some of our more popular packages, however, as wedding are very special and unique, we want to ensure that every wedding is special per the wedding party. We want to make sure it is excatly to the specs of the marriage party. If you do not see a package that is perfect for you, please reach out. We are happy to accomodate most requests. </p>

        {/* <MDBBtnGroup className="mb-4" aria-label="Basic example">
          <MDBBtn href="#" color="dark" active>
            Monthly billing
          </MDBBtn>
          <MDBBtn color="light">
            Annual billign <small>(2 months FREE)</small>
          </MDBBtn>
        </MDBBtnGroup> */}
      </div>

      <MDBRow>
        <MDBCol md="3">
          <MDBCard>
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Especial</MDBCardTitle>
              <p className="text-muted">
                The Wedding Essential
              </p>
              <p className="h2 fw-bold">
                $11,080
                {/* <small className="text-muted" style={{ fontSize: "18px" }}>
                  /mo
                </small> */}
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Contact Us!
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                What's included
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>House Transportation</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Music</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Officiant*</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Photography* (50 pictures)</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Tables, Chairs, Dinnerware</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Exceptional</MDBCardTitle>
              <p className="text-muted">
                A Rustic favorite
              </p>
              <p className="h2 fw-bold">
                $13,850
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Contact Us!
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                Everything from the Especial Package PLUS
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Photography* (100 Pictures)</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Complimantry Soft Drinks</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Small Flower Arrangements for tables</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Complimentry Fruit, Snacks and Chips</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Exclusive</MDBCardTitle>
              <p className="text-muted">
                A Night to Remember 
              </p>
              <p className="h2 fw-bold">
                $16,910
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Contact Us!
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                Everything from the Exceptional Package PLUS
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Photography* (150 Pictures)</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Wine and Soft Drinks*</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Medium Flower Arrangements for Tables</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>1 night stay for up to 60 guests</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Wedding Dinner Service</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Continuous fruit, snacks and chips</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Morning after breakfast for all guests</small>
                </li>
                
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Extraordinary</MDBCardTitle>
              <p className="text-muted">
                Mountain Retreat
              </p>
              <p className="h2 fw-bold">
                $20,265
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Contact Us!
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                Everything from the Exclusive package plus
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Photography* (200 Pictures)</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Beer, Wine and Soft Drinks*</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>2 Night Stay for up to 60 guests</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Breakfast and Lunch provided both days</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Reception Dinner</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Wedding Cake</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Elite</MDBCardTitle>
              <p className="text-muted">
                A Weekend in Paradise
              </p>
              <p className="h2 fw-bold">
                $22,050
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Contact Us!
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
               Everything from the Extraordinary package plus
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Photography* (300 Pictures)</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Large Flower Arrangements</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Custom Wedding Cake</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Celebration Trip for 2*</small>
                </li>
               
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <div>
        <h4>Disclosures</h4>
        <p>*Officiant: You are welcome to provide your own officiant. If you would like us to take care of this, we will provide an Officaint at no charge!
        </p>
        <p>**Photography: The pictures that are included with the package, are editated photos. These will be professionally edited by the photographer. Also, if you would like to hire your own photographer, you are more than welcome. We can either still provide a photographer for the package pictures or discount package to reflect no pictures provided from us. </p>
        <p>***Alcohol: Due to state regulations, a bar tender is required to be provided for all alcoholic beverages. All alcoholic beverages must be served by a regulated bartender</p>
        <p>****Celebration trip: After the ceremony and following day, a comlimentry flight to Los Angeles, Las Vegas or Oregon Beaches. Included in this Trip is, round trip tickets for 2, 2 night accomodations and entrance tickets to event of choice provided by Cascade Mountain Ranch.</p>
        <p></p>
        <p></p>
    </div>
    </MDBContainer>
   
  );
}