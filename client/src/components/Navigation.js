import { Navbar, NavLink, Nav } from 'react-bootstrap';
import logo from "./images/Screenshot_20221102_053356.png"
import '../assets/css/nav.css';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Navigation() {
    return (
        <Navbar className='navFull' collapseOnSelect expand='lg'>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>


                <Nav className='navWrap'>

                    <NavLink href='/'>
                        <img className='navimg' src={logo} alt='logo'></img>
                    </NavLink>

                    <NavLink className='navItem' href='/'>Home</NavLink>
                    <NavLink className='navItem' href='/about'>About</NavLink>
                    <NavLink className='navItem login' href='/gallery'>Gallery</NavLink>
                    <NavLink className='navItem' href='/venue'>Venue</NavLink>
                    <NavLink className='navItem login' href='/packages'>Packages</NavLink>
                    <NavLink className='navItem login' href='/contact'>Contact Us</NavLink>

                    <div className='socialWrap'>
                        <a target='_blank' rel="noreferrer" href='https://github.com/kodapassey'>
                            <FontAwesomeIcon className='socials' icon={faInstagram} />
                        </a>

                        <a target='_blank' rel="noreferrer" href='https://github.com/kodapassey'>
                            <FontAwesomeIcon className='socials' icon={faFacebook} />
                        </a>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}