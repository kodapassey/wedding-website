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
                <map>(MAP GOES HERE)</map>
            </Container>
        </div>
        <div>
            <footer></footer>
        </div>
       </>
    )
}