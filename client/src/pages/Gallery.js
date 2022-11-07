import { useEffect } from "react";

import { Container, Card, Col, Button, Row } from "react-bootstrap";
// import { images } from "../components/GalleryImages";
import MyGallery from "../components/GalleryImages"


export default function Gallery() {
    return (
        <>
        <div>
            <Container>
            <h1>Gallery</h1> 
                <p>
                    Take a look at some of our events
                </p>
            </Container>
        </div>
        <div>
            <MyGallery />
        </div>
       
       </>
    )
}
