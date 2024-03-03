import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>

            <section>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 text-center'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                Cascade Mountain Ranch
                            </h6>
                            <p>
                                2500 Jumpoff Joe Creek Rd
                            </p>
                            <p>Grants Pass, OR 97526</p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 text-center'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='/packages' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='/venue' className='text-reset'>
                                    Venue
                                </a>
                            </p>
                            <p>
                                <a href='/contact' className='text-reset'>
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 text-center'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                <a href='mailto:getaway@use.com'>getaway@usa.com</a>
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                (541) 890-8436
                            </p>
                            <a target='_blank' rel="noreferrer" href='https://www.facebook.com/CascadeMountainRanch/'>
                            <FontAwesomeIcon className='socials' icon={faFacebook} />
                        </a>
                        <a target='_blank' rel="noreferrer" href='https://www.instagram.com/cascade_mountain_ranch/'>
                            <FontAwesomeIcon className= 'socials' icon= {faInstagram} />
                        </a>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </MDBFooter>
    );
}