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


      <section className="listOfAmenities">
        <ol type="a">
          <li>Celebration trip, after ceremony, complimantary flight to Los Angeles, Universal Studio area includes, flight, threee night accomodations, entrance tickets for two.</li>
          <li>Venue, 2 day overnight included, longer stay, see costs, 60 guests, extra core family stay.</li>
          <li>Food services (two C-breakfasts, Recital Dinner, Wedding Dinner, Continuous fruit, snacks, chips)</li>
          <li>Lodging 2 lodges, and Carriage BunkHouse</li>
          <li>Amenities, (tables, chairs, dinnerware, table and candles & cloths)</li>
          <li>Complimantary(wine, soft drinks) bartender not included but mandatory</li>
          <li>Photography (recommendation) 50 photos</li>
          <li>Service Official(Minister available) plus arbor included</li>
          <li>Music (sound system) Music is guest generated</li>
          <li>House Transportation (golf cart transport to & from Lodges for B&G)</li>
          <li>Cake & extras(recommendation) (Generally guest generated)</li>
        </ol>
      </section>


      <table className="packagesTable">
        <tr>
          <th></th>
          <th>Food Service</th>
          <th>Premium Lodging</th>
          <th>Lodges C-Hose Only</th>
          <th>Tables & Chairs</th>
          <th>Drinks</th>
          <th>Photos</th>
          <th>Minister</th>
          <th>Music</th>
          <th>Cart</th>
          <th>Cake</th>
          <th>?</th>
        </tr>
        <tr>
          <td>Elite - $22,050</td>
          <th>C</th>
          <th>B</th>
          <th>-</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
          <th>H</th>
          <th>I</th>
          <th>J</th>
          <th>K</th>
          <th>A</th>
        </tr>
        <tr>
          <td>Extraordinary - $20,265</td>
          <th>C</th>
          <th>B</th>
          <th>-</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
          <th>H</th>
          <th>I</th>
          <th>J</th>
          <th>K</th>
          <th>A</th>
        </tr>
        <tr>
          <td>Exclusive - $16,910</td>
          <th>C</th>
          <th>-</th>
          <th>D</th>
          <th>E</th>
          <th>F</th>
          <th>-</th>
          <th>H</th>
          <th>Sound System Only</th>
          <th>J</th>
          <th>-</th>
          <th>-</th>
        </tr>
        <tr>
          <td>Exceptional - $13,850</td>
          <th>C</th>
          <th>-</th>
          <th>Two Units Only</th>
          <th>E</th>
          <th>F</th>
          <th>-</th>
          <th>-</th>
          <th>-</th>
          <th>J</th>
          <th>-</th>
          <th>-</th>
        </tr>
        <tr>
          <td>Executive - $11,080</td>
          <th>C</th>
          <th>-</th>
          <th>Two Units Only</th>
          <th>E</th>
          <th>F</th>
          <th>-</th>
          <th>-</th>
          <th>-</th>
          <th>J</th>
          <th>-</th>
          <th>-</th>
        </tr>
      </table>


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