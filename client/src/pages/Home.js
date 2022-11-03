import { Container } from "react-bootstrap";
import heroImg1 from '../components/images/black-mountain-070-1080x600.jpg';
import heroImg2 from '../components/images/outdoor-wedding-ideas-newlyweds-happy-at-the-nature.jpg';
import heroImg3 from '../components/images/rustic-wedding-ceremony-native-roaming.jpg';
import heroImg4 from '../components/images/Trying-to-Plan-an-Outdoor-Wedding-Consider-These-Great-Tips-For-Success.jpg';
import '../assets/css/home.css';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const fadeImages = [
    {
        url: heroImg1,
        caption: 'First Slide'
    },
    {
        url: heroImg2,
        caption: 'Second Slide'
    },
    {
        url: heroImg3,
        caption: 'Third Slide'
    },
    {
        url: heroImg4,
        caption: 'Fourth Slide'
    }
];


export default function Home() {



    return (
        <>
            <div className="slide-container heroDiv">
                <Fade>
                    {fadeImages.map((fadeImage, index) => (
                        <div className="each-fade" key={index}>
                            <div className="image-container">
                                <img className="heroImg" src={fadeImage.url} />
                            </div>
                            <h2 className="heroTxt">{fadeImage.caption}</h2>
                        </div>
                    ))}
                </Fade>
            </div>


            <div>
                <body>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </body>
            </div>
            <div>
                <img></img>
                <Container>
                    <h2>
                        The Ranch
                    </h2>
                    <body>
                        Cascade Mountain lodge and Kelly Mountain lodge 50 acres of woods, mountains and lakes. lorem ipsum
                    </body>
                </Container>
            </div>
            <div>
                <img></img>
                <Container>
                    <h2>
                        Weddings
                    </h2>
                    <body>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </body>
                </Container>
            </div>
            <div>
                <img></img>
                <Container>
                    <h2>
                        Events and reunions
                    </h2>
                    <body>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </body>
                </Container>
            </div>
            <div>
                <img></img>
                <Container>
                    <h2>
                        In Closing.....
                    </h2>
                    <body>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </body>
                </Container>
            </div>
            <div>
                <Container>
                    <button>Facebook</button>
                    <button>Instagram</button>
                    <button>Twitter</button>
                </Container>
            </div>
        </>
    )
}