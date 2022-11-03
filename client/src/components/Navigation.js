import { Navbar, NavLink, Nav } from 'react-bootstrap';
import logo from "./images/Screenshot_20221102_053356.png"

export default function Navigation() {
    return (
        <Navbar className='navFull' collapseOnSelect expand='lg' bg='black' variant='dark'>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
                    <Nav className='navWrap'>
                        <NavLink className='navItem' href='/'>Home</NavLink>
                        <NavLink className='navItem' href='/about'>About</NavLink>
                        <NavLink className='navItem login' href='/gallery'>Gallery</NavLink>
                        <NavLink className='navItem' href='/venue'>Venue</NavLink>
                        <NavLink className='navItem login' href='/packages'>Packages</NavLink>
                        <NavLink className='navItem login' href='/contact'>Contact Us</NavLink>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}