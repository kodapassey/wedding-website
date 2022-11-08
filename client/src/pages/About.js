import { Container } from "react-bootstrap";

export default function About() {
    return (
        <>
        <div>
            <Container>
            <h1>About</h1> 
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </Container>
        </div>
        <div>
            <Container>
                <images>
                    Some sort of scroll through or slideshow of classic family pictures
                </images>
            </Container>
        </div>
        <div>
            <Container>
                <h2>Directions</h2>
                <p>you drive on a road. you take an exit. you turn that way. then you drive and turn this way. boom you made it!</p>
            </Container>
        </div>
        <div>
            <Container>
                <h2>
                    Map
                </h2>
                <iframe 
                title="myMap" 
                src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.9820332572726!2d-123.33890028446842!3d42.576903829372306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c59e2df6da1719%3A0xca312100026e0002!2s2500%20Jumpoff%20Joe%20Creek%20Rd%2C%20Grants%20Pass%2C%20OR%2097526!5e0!3m2!1sen!2sus!4v1667513044396!5m2!1sen!2sus" 
                width="400" 
                height="300" 
                style={{border: 0}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </Container>
        </div>
        <div>
            <footer></footer>
        </div>
       </>
    )
}