import { Navbar, NavLink, Nav } from 'react-bootstrap';


export default function Navigation(props) {
    return (
        <Navbar>
            <NavLink>
                <h1>Wedding</h1>
            </NavLink>
                <Nav>
                    <NavLink classname='' href='/'>Home</NavLink>
                    <NavLink classname='' href='/venue'>Venue</NavLink>
                    <NavLink classname='' href='/packages'>Packages</NavLink>
                    <NavLink classname='' href='/pricing'>Pricing</NavLink>
                    <NavLink classname='' href='/contact'>Contact Us</NavLink>
                </Nav>
            
        </Navbar>
    )
}