import { Container, Card, Col, Button } from "react-bootstrap";

import img1 from "../components/images/Screenshot_20221102_053356.png" 

export default function Gallery() {
  return (
    <>
      <div>
        <Container>
          <h1>Gallery</h1>
          <p>Check out the pics below</p>
        </Container>
      </div>
      <div className="App">
        <Container className="p-4">
          <Col md="4">
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              
                {/* <Button variant="primary">Read More</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    </>
  );
}
