import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container } from "react-bootstrap";


import image1 from "./images/ranchWeddingImages/image1.jpg"
import image2 from "./images/ranchWeddingImages/image2.jpg"
import image3 from "./images/ranchWeddingImages/image3.jpg"
import image4 from "./images/ranchWeddingImages/image4.jpg"
import image5 from "./images/ranchWeddingImages/image5.jpg"
import image6 from "./images/ranchWeddingImages/image6.jpg"
import image7 from "./images/ranchWeddingImages/image7.jpg"
import image8 from "./images/ranchWeddingImages/image8.jpg"

const images = [
    {
        image: image1,
        title: "Cute Wedding"
    },
    {
        image: image2,
        title: "Sweet Wedding"
    },
    {
        image: image3,
        title: "Adorable Wedding"
    },
    {
        image: image4,
        title: "Cutting the Cake!"
    },
    {
        image: image5,
        title: "Cute Wedding"
    },
];



export default function MyGallery() {
    const imageIndex = [images.image, images.title];
    for (let i = 0; i < images.length; i++) {
       
    return (
      <>
        <div className="gallery-cards">
          <Container className="">
            <Row>
              {imageIndex.map((imageIndex))}
              <Col  xs={12} md={4} lg={3}>
                <Card>
                  <Card.Img src={images[i].image} />
                  <Card.Body>
                    <Card.Title>{images[i].title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
}
}