import { useEffect } from "react";

import { Container, Card, Col, Button, Row } from "react-bootstrap";
// import { images } from "../components/GalleryImages";
import MyGallery from "../components/GalleryImages"
import '../assets/css/gallery.css';


export default function Gallery() {
    return (
        <>
        <div>
            <Container>
            <h1 className="galleryH1">Gallery</h1> 
                <p>
                    Take a look at some of our events
                </p>
            </Container>
        </div>
        <div className="galleryText">
            <MyGallery />
        </div>
       
       </>
    )
}
