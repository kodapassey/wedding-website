import { Navbar, NavLink, Nav } from 'react-bootstrap';
import logo from "./images/ranchWeddingImages/CMRLogo.png"
import '../assets/css/nav.css';
import { faFacebook, faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logo2 from "./images/logo.png"

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
                    <NavLink className='navItem' href='/vendors'>Vendors</NavLink>
                    <NavLink className='navItem login' href='/packages'>Pricing</NavLink>
                    {/* <NavLink className='navItem login' href='/wedding-elite'>Elite Packages</NavLink> */}
                    <NavLink className='navItem login' href='/contact'>Contact Us</NavLink>

                    <div className='socialWrap'>
                        {/* <a target='_blank' rel="noreferrer" href='https://github.com/kodapassey'>
                            <FontAwesomeIcon className='socials' icon={faInstagram} />
                        </a> */}

                        <a target='_blank' rel="noreferrer" href='https://www.facebook.com/CascadeMountainRanch/'>
                            <FontAwesomeIcon className='socials' icon={faFacebook} />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://www.instagram.com/cascade_mountain_ranch/'>
                            <FontAwesomeIcon className= 'socials' icon= {faInstagram} />
                        </a>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}